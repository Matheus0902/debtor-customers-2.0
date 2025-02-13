import { Container, MainEntry, ToBack, Form, BoxSuggestions, Suggestion, BoxButtons } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import { GoX } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa6"

export function NewEntry() {
  
  const [clientSearch, setClientSearch] = useState([])

  const [clientName, setClientName] = useState('')
  const [description, setDescription] = useState('Pagamento')
  const [total, setTotal] = useState('')
  const [searchSuggestion, setSearchSuggestion] = useState(true)
  const [register, setRegister] = useState('toReceive')
  const [toggleButton, setToggleButton] = useState('Pagamento')
  const isPayment = register != 'toReceived'

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewEntry() {
    if (!clientName) {
      return alert("Digite o nome do cliente");
    }
    if (!description) {
      return alert("Digite a descrição da entrada");
    }

    let value = parseFloat(total);

    if (!total || isNaN(value) || value <= 0) {
      return alert("Digite um valor válido para o total da entrada");
    } else if (isPayment) {
      value = value * -1;
    }

    const lowerClientName = clientName.toLowerCase();

    try {
      await api.post('new-entries', {
        client_name: lowerClientName,
        description: description,
        total_value: value,
      });

      alert('Entrada registrada com sucesso!');
      handleBack();
      console.log(value);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.error('Erro ao registrar entrada:', error);
        alert("Não foi possível registrar a entrada");
      }
    }
  }

  useEffect(() => {
    if(clientName.length >= 3) {

      async function  fetchClientSearch() {
        try {
          const response = await api.get(`/clients?name=${clientName}`)
          setClientSearch(response.data)

        } catch (error) {
          console.error('Erro ao buscar clientes:', error)
        }
      }
    
      fetchClientSearch()
    } else {
      setClientSearch([])
    }

  }, [clientName])


  function handleToggleRegister() {

    if(!isPayment) {
      setRegister('received')
      setToggleButton('Pagamento')
      setDescription('Pagamento')
    } else {
      setRegister('toReceived')
      setToggleButton('Dívida')
      setDescription('')
    }
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
      <MainEntry>
        <h1>Nova entrada</h1>
        <Form>
          <Input 
            placeholder='Nome do cliente'
            onChange={e => setClientName(e.target.value)}
            type='text'
            value={clientName}
            icon={GoX}
            onClick={() => { 
              setSearchSuggestion(true); 
              setClientName('') 
            }} 
          />
          
          {
            searchSuggestion ? 

            <BoxSuggestions>
            {
              clientSearch.map( client => (
                <Suggestion
                  key={client.id}
                  className='client-suggestion'
                  onClick={() => {
                    setClientName(client.name)
                  }}
                >
                  <span
                    onClick={() =>setSearchSuggestion(false)}
                  >
                    {client.name}
                  </span>
                </Suggestion>
              ))
            }
          </BoxSuggestions> 

          :

          <BoxSuggestions></BoxSuggestions>
          }

          <Input 
            placeholder='Descrição da entrada'
            value={description}
            readOnly={isPayment}
            onChange={e => setDescription(e.target.value)}
            type='text'
          />

          <Input 
            placeholder='Valor'
            value={total}
            onChange={e => {
              const value = e.target.value
              if(!isNaN(value)){
                setTotal(value)
              }
            }}
            type='text'
          />

          <BoxButtons>
            <Button
              title='Alterar'
              onClick={handleToggleRegister}
            />

            <Button
              title={`Registar `+ toggleButton}
              onClick={handleNewEntry}
            />
          </BoxButtons>

        </Form>
      </MainEntry>
    </Container>
  )
}