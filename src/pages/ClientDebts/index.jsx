import { Container, TableDebts, BoxOrganizer, ToBack, TableWrapper, Message } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { DebtRow } from "../../components/DebtRow"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from '../../services/api'

import { FaArrowLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


import generatePDF, { Margin } from 'react-to-pdf';

const personalization = {
    // default is `save`
  method: 'save',
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.MEDIUM,
    // default is 'A4'
    format: 'A4',
    // default is 'portrait'
    orientation: 'landscape'
  }
}

const recoverContentToPdf = () => document.getElementById('content')

export function ClientDebts() {

  const [client, setClient] = useState(null)
  const [clientDebts, setClientDebts] = useState([])
  const [clientDebtsTotalValue, setClientDebtsTotalValue] = useState(0)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const clientName = localStorage.getItem('@debtor-customers:client')
    
    if(clientName) {
      fetchClient(clientName)
    }
  }, [])
  
  const navigate = useNavigate()

  function ToNewEntry() {
    navigate('/NewEntry')
  }

  function handleBack() {
    navigate(-1)
  }
  
  async function fetchClient(clientName) {
    
    setLoading(true)

    try {

      const responseClient = await api.get(`/clients?name=${clientName}`)

      const clientData = responseClient.data[0]
      
      if(clientData) {
        setClient(clientData)

        const responseClientDebts = await api.get(`new-entries?client_id=${clientData.id}&startDate=${startDate}&endDate=${endDate}`)
    
        const clientDebtsData = responseClientDebts.data

        let totalValue = 0

        if(clientDebtsData) {
          setClientDebts(clientDebtsData)
          clientDebtsData.map(clientDebt => {

            totalValue = totalValue + clientDebt.total_value
            setClientDebtsTotalValue(totalValue)
          })
        }

      } else {
        console.error("Cliente não encontrado")
      }

    } catch (error){
      console.error('Erro ao buscar cliente:', error)
    } finally {
      setLoading(false)
    }
    
  }

  async function deleteClientEntries() {
    try {
      await api.delete(`/new-entries?client_id=${client.id}`)

      const clientName = localStorage.getItem('@debtor-customers:client')
      fetchClient(clientName)

    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message)

      } else {
        alert("Não foi possível deletar as entradas")
      }
    }
  }

  function filterEntries() {
    if(startDate == '' || endDate == '') {
      return alert("Informe a data inicial e final para filtrar")
    }

    const clientName = localStorage.getItem('@debtor-customers:client')
    fetchClient(clientName)

    setStartDate('')
    setEndDate('')
  }

  function cleanFilter() {
    setStartDate('')
    setEndDate('')

    const clientName = localStorage.getItem('@debtor-customers:client')
    fetchClient(clientName)
  }
  
  
  function formatDate(dateString) {
    const date = new Date(dateString); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()).slice(-2); 
  
    return `${day}/${month}/${year}`;
  }

  function formatCurrency(value) {
    return value.toFixed(2).replace('.', ',')
  }

  return (
    <Container>
      <Header />

      <ToBack>
        <ButtonText
          title={<FaArrowLeft />}
          onClick={handleBack}
        />
      </ToBack>

      { loading && <Message>Carregando...</Message>}
      
      <TableDebts>
        { !loading && client ? (
          <>
            <h1>Cliente: {client.name.toUpperCase()}</h1>

            {
              (clientDebts.length !== 0) ? (
                <>
                  <TableWrapper>
                    <table id="content">
                      <thead>
                        <tr>
                          <th scope="col">Data</th>
                          <th scope="col">Itens</th>
                          <th scope="col">Valor total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          clientDebts.map((clientDebt, index) => (
                            <DebtRow 
                              key={clientDebt.id || index}
                              date={formatDate(clientDebt.created_at)}
                              description={clientDebt.description}
                              total={formatCurrency(clientDebt.total_value)}
                            />
                          ))
                        }

                      </tbody>
                      <tfoot>
                        <tr>
                          <th scope="row" colSpan="2">Saldo Atual</th>
                          <td>
                            {formatCurrency(clientDebtsTotalValue)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
            
                    <BoxOrganizer>
                      <Input 
                        type="date" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />

                      <Input 
                        type="date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                      
                      <Button 
                        title='Filtrar'
                        onClick={filterEntries} 
                      />

                      <Button 
                        title='Deletar ultima'
                        onClick={deleteClientEntries} 
                      />

                      <Button 
                        title='Limpar filtro'
                        onClick={cleanFilter} 
                      />
                    </BoxOrganizer>
                  </TableWrapper>

                    </>
                  ) : (
                   !loading && <Message>Este cliente não possui debtos!</Message>
                  )
                }

                <BoxOrganizer>
                  <Button 
                    title='Gerar pdf'
                    onClick={() => generatePDF(recoverContentToPdf, personalization)}  
                  />
                  <Button 
                    title='Nova entrada'
                    onClick={ToNewEntry}
                  />
                </BoxOrganizer>
          </>
        ) : (
          !loading && <Message>Cliente não encontrado</Message>  // Mensagem se o cliente não for encontrado
        )}
      </TableDebts>
    </Container>
  )
}