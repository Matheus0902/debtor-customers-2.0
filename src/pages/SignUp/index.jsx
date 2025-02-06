import { useState } from "react"
import { Container, Form, InputWraper } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { Link, useNavigate } from "react-router-dom"

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post('/users', {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar o usuário!")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>Debtor Customers</h1>

        <p>Aplicação para lançar contas de clientes</p>

        <h2>Faça seu login</h2>

        <InputWraper>
          <Input 
            placeholder='Nome'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Email'
            type='text'
            onChange={e => setEmail(e.target.value)}
          />
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Senha'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </InputWraper>

        <Button 
          title='Cadastrar'
          onClick={handleSignUp}
        />

        <Link to='SignIn'> 
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}