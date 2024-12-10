import { Container, ClientsSearch, ToBack } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { ClientShow } from "../../components/ClientShow"

import { FaArrowLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom"

export function ClientsList() {

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
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

      <ClientsSearch>
      
      <Input placeholder="Buscar clientes"/>
      <ul>
        <ClientShow 
          ClientName='Matheus Silva'
        />
        <ClientShow 
          ClientName='José Silva'
        />
        <ClientShow 
          ClientName='Fatima Silva'
        />
      </ul>
      </ClientsSearch>
    </Container>
  )
}