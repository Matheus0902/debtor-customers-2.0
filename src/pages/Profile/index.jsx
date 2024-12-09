import { Container, Form, InputWraper } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { GoArrowLeft } from "react-icons/go";

export function Profile() {
  return (
    <Container>
      <header>
        <button>
          <GoArrowLeft />
        </button>
      </header>
      <Form>
        <h1>Atualizar Informações</h1>

        <InputWraper>
          <Input placeholder='Name'/>
        </InputWraper>

        <InputWraper>
          <Input placeholder='Email'/>
        </InputWraper>

        <InputWraper>
          <Input placeholder='Senha atual'/>
        </InputWraper>

        <InputWraper>
          <Input placeholder='Nova senha'/>
        </InputWraper>

        <Button title='Salvar'/>
      </Form>
    </Container>
  )
}