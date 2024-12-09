import { MdGroups , MdGroupAdd, MdOutlineSaveAlt  } from "react-icons/md";
import { Container, Menu, LinkButton } from "./styles"
import { Header } from "../../components/Header"

export function Home() {

  return (
    <Container>
      <Header />
      <Menu>
        <LinkButton to='/ClientsList'>
          <MdGroups />
          Clientes
          
        </LinkButton>

        <LinkButton to='/NewClient'>
          <MdGroupAdd />
          Novo cliente
        </LinkButton>

        <LinkButton to='/NewEntry'>
          <MdOutlineSaveAlt />
          Novo Registro
        </LinkButton>

      </Menu>
    </Container>
  )
}