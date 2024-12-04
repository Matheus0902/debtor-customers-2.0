import { Container } from './styles'

export function Input ({ id, type, placeholder }) {
  return (
    <Container>
      <input type={type} id={id} placeholder={placeholder}/>
    </Container>
  )
}