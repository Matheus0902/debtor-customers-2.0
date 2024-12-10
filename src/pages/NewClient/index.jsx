import { Container, MainClient, ToBack } from "./styles"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"
import { ButtonText } from "../../components/ButtonText"

import { useNavigate } from "react-router-dom"

import { FaArrowLeft } from "react-icons/fa6";

export function NewClient() {

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
      <MainClient>
        <h1>Informações pessoais</h1>
        <Form 
          inputOne='Nome'
          inputTwo='Email'
          inputThree='Whatsapp'
          button='Registrar cliente'
        />
      </MainClient>
    </Container>
  )
}