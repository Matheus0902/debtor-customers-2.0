import { Container, Form, InputWraper } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Debtor Customers</h1>

        <p>Aplicação para lançar contas de clientes</p>

        <h2>Faça seu login</h2>

        <InputWraper>
          <Input placeholder='Nome'/>
        </InputWraper>

        <InputWraper>
          <Input placeholder='Email'/>
        </InputWraper>

        <InputWraper>
          <Input placeholder='Senha'/>
        </InputWraper>

        <Button title='Cadastrar'/>

        <ButtonText title='Voltar para o login'/>
      </Form>
    </Container>
  )
}