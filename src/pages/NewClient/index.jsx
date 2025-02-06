import { Container, MainClient, ToBack, Form } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { FaArrowLeft } from "react-icons/fa6";

export function NewClient() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewClient() {
    if(!name) {
      return alert("Digite o nome do cliente")
    }

    if(!email) {
      return alert("Digite o email do cliente")
    }
    if(!phone) {
      return alert("Digite o contato do cliente")
    }

    const lowerName = name.toLowerCase()

    api.post('clients', {
      name: lowerName,
      email: email, 
      contact: phone
    }).then(() => {
      alert("Cliente cadastrado com sucesso!")
      navigate(-1)
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)

      } else {
        alert("Não foi possível cadastrar o cliente")
      }
    })

  }

  const handlePhoneChange = (e) => {
    const value = e.target.value

    let formattedValue = value.replace(/\D/g, '')

    if (formattedValue.length <= 2) {
      formattedValue = `(${formattedValue}`;
    } else if (formattedValue.length <= 5) {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`;
    } else if (formattedValue.length <= 10) {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7)}`;
    } else {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
    }

    setPhone(formattedValue);
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
        <Form>
          <Input 
            placeholder='Nome'
            onChange={e => setName(e.target.value)}
            type='text'
          />

          <Input 
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            type='email'
          />

          <Input 
            placeholder='Contato'
            value={phone}
            onChange={handlePhoneChange}
            type='text'
          />

          <Button
            title='Registrar cliente'
            onClick={handleNewClient}
          />
        </Form>
      </MainClient>
    </Container>
  )
}