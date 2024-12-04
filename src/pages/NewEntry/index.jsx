import { Container, MainEntry } from "./styles"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"

export function NewEntry() {
  return (
    <Container>
      <Header />
      <MainEntry>
        <h1>Nova entrada</h1>
        <Form 
          inputOne='Nome'
          inputTwo='Descrição'
          inputThree='Valor'
          button='Registrar entrada'
        />
      </MainEntry>
    </Container>
  )
}