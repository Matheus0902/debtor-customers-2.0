import { Container, TableDebts, BoxButtons, ToBack } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { DebtRow } from "../../components/DebtRow"
import { Button } from "../../components/Button"

import { api } from '../../services/api'

import { FaArrowLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export function ClientDebts() {

  const [client, setClient] = useState(null)
  const [clientDebts, setClientDebts] = useState([])
  const [clientDebtsTotalValue, setClientDebtsTotalValue] = useState(0)
  
  useEffect(() => {
    const clientName = localStorage.getItem('@debtor-customers:client')
    console.log(clientName)
    
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

    try {
      const responseClient = await api.get(`/clients?name=${clientName}`)
      
      const clientData = responseClient.data[0]
      
      if(clientData) {
        setClient(clientData)

        const responseClientDebts = await api.get(`new-entries?client_id=${clientData.id}`)

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
    }
    
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
      <TableDebts>
        {client ? (
          <>
            <h1>{client.name.toUpperCase()}</h1>

            <table>
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

            <BoxButtons>
              <Button title='Download'/>
              <Button 
                title='Nova entrada'
                onClick={ToNewEntry}
              />
            </BoxButtons>
          </>
        ) : (
          <p>Cliente não encontrado</p>  // Mensagem se o cliente não for encontrado
        )}
      </TableDebts>
    </Container>
  )
}