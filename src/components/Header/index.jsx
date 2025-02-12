import { MdAccountBalanceWallet } from "react-icons/md";
import { Container, Logout } from "./styles"

import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

import { FaPowerOff } from "react-icons/fa";

export function Header() {

  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <a href="#">
        <h1><span>Debtor</span><span>Customers</span></h1>
        <MdAccountBalanceWallet />
      </a>

      <Logout onClick={handleSignOut}>
        <FaPowerOff />
      </Logout>
    </Container>
  )
}