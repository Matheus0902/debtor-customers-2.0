import { Container, MainClient } from "./styles"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"

export function NewClient() {
  return (
    <Container>
      <Header />
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