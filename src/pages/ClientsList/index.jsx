import { useState, useEffect } from "react"
import { Container, ClientsSearch, ToBack, ClientShow, LinkButton } from "./styles"
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

  const navigate = useNavigate()

  function handleClientSelected() {
    localStorage.setItem('@debtor-customers:client', clientSelected.toLowerCase())
  }

  useEffect(() => {
    handleClientSelected()

  }, [clientSelected])

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    if(search.length >= 3) {
      async function  fetchClients() {
        const response = await api.get(`/clients?name=${search}`)
        setClients(response.data)
      }
  
      fetchClients()
    }
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
      <ul>
        {
          clients.map( client => (
            <ClientShow 
              key={client.id}
            >
              {upperFirstLetter(client.name)}
              <LinkButton to="/ClientDebts">
                <IoArrowRedoCircleOutline 
                  onClick={(e) => setClientSelected(client.name)}
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