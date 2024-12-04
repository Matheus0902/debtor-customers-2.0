import { Container, Menu } from "./styles"
import { Header } from "../../components/Header"
import { LinkButton } from "../../components/LinkButton"

export function Home() {
  return (
    <Container>
      <Header />
      <Menu>
        <LinkButton 
          icon='../../../public/clients.svg'
          title='Clientes'
        />
        <LinkButton 
          icon='../../../public/new-client.svg'
          title='Novo cliente'
        />
        <LinkButton 
          icon='../../../public/new-entry.svg'
          title='Novo Registro'
        />
      </Menu>
    </Container>
  )
}