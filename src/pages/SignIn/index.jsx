import { useState } from "react"
import { Container, Form, InputWraper } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"

import { Link } from "react-router-dom"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Debtor Customers</h1>

        <p>Aplicação para lançar contas de clientes</p>

        <h2>Faça seu login</h2>

        <InputWraper>
          <Input 
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            type='text'
          />
        </InputWraper>

        <InputWraper>
          <Input 
            placeholder='Senha'
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </InputWraper>

        <Button 
          title='Entrar'
          onClick={handleSignIn}
        />

        <Link to='/SignUp'> 
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}