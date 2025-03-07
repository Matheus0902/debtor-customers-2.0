import { useState, useEffect } from "react"
import { Container, ClientsSearch, ToBack, ClientShow, LinkButton, MessageError} from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"

import { api } from "../../services/api"

import { FaArrowLeft } from "react-icons/fa6";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom"

export function ClientsList() {
  
  const [search, setSearch] = useState('')
  const [clients, setClients] = useState([])
  const [clientSelected, setClientSelected] = useState('')
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  function handleClientSelected() {
    localStorage.setItem('@debtor-customers:client', clientSelected.toLowerCase())
  }

  useEffect(() => {
    handleClientSelected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientSelected])

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    const fetchClients = async () => {
      setError(null)
      
      try {
        const response = await api.get(`/clients?name=${search}`)
        setClients(response.data)
      } catch (error) {
        setError("Houve um erro ao buscar os clientes")
        console.error(error)
      } 
    }

    fetchClients() 
  }, [search])

  const upperFirstLetter = (str) => {
    if (!str) return ''; // Se a string for vazia, retorna uma string vazia
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <Header />

      <ToBack>
        <ButtonText
          title={<FaArrowLeft />}
          onClick={handleBack}
        />
      </ToBack>

      <ClientsSearch>
      
      <Input 
        placeholder="Buscar clientes"
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <MessageError>{error}</MessageError>}
      <ul>
        {
          clients.map( client => (
            <ClientShow 
              key={client.id}
            >
              {upperFirstLetter(client.name)}
              <LinkButton to="/ClientDebts">
                <IoArrowRedoCircleOutline 
                  onClick={() => setClientSelected(client.name)}
                />
              </LinkButton>
            </ClientShow>
          ))
        }
      </ul>
      </ClientsSearch>
    </Container>
  )
}