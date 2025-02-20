import { Container, Form, InputWraper, ToBack } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FaArrowLeft } from "react-icons/fa6"

import { api } from "../../services/api"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Profile() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  
  async function handleProfile() {
    

    if(!oldPassword) {
      return alert("Digite senha atual do perfil")
    }

    if(!password) {
      return alert("Digite a nova senha do perfil")
    }
    
    try {
      await api.put("/users", {
        name: name,
        email: email,
        old_password: oldPassword,
        password: password
        
      })

        alert("Usuário atualizado com sucesso")
        handleBack()

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o usuário")
        console.error('Error ao atualizar usuário:', error)
      }
    }
  }

  return (
    <Container>
      <ToBack>
        <ButtonText
          title={<FaArrowLeft />}
          onClick={handleBack}
        />
      </ToBack>
      <Form>
        <h1>Atualizar Informações</h1>

        <InputWraper>
          <Input 
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
            
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
            
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Senha atual'
            onChange={(e) => setOldPassword(e.target.value)}
            type='password'
          />
            
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Nova senha'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
            
        </InputWraper>

        <Button 
          title='Salvar'
          onClick={handleProfile}
        />
      </Form>
    </Container>
  )
}