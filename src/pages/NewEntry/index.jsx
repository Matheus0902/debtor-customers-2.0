import { Container, MainEntry } from "./styles"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"
import { ButtonText } from "../../components/ButtonText"

import { useNavigate } from "react-router-dom"

import { FaArrowLeft } from "react-icons/fa6"

export function NewEntry() {

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>
      <Header />
      <MainEntry>
        <ButtonText
          title={<FaArrowLeft />}
          onClick={handleBack}
        />
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