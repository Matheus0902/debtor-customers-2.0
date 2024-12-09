import { Container } from "./styles"
import { IoArrowRedoCircleOutline } from "react-icons/io5";


export function ClientShow({ ClientName }) {
  return (
    <Container>
      {ClientName}
      <a href="">
        <IoArrowRedoCircleOutline />
      </a>
    </Container>
  )
}