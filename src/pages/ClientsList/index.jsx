import { Container, ClientsSearch } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ClientShow } from "../../components/ClientShow"

export function ClientsList() {
  return (
    <Container>
      <Header />
       <ClientsSearch>
        <Input placeholder="Buscar clientes"/>
        <ul>
          <ClientShow 
            ClientName='Matheus Silva'
          />
          <ClientShow 
            ClientName='José Silva'
          />
          <ClientShow 
            ClientName='Fatima Silva'
          />
        </ul>
       </ClientsSearch>
    </Container>
  )
}