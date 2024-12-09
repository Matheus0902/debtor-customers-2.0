import { MdAccountBalanceWallet } from "react-icons/md";
import { Container } from "./styles"


export function Header() {
  return (
    <Container>
      <a href="#">
        <h1><span>Debtor</span><span>Customers</span></h1>
        <MdAccountBalanceWallet />
      </a>
    </Container>
  )
}