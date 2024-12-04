import { Container } from './styles'

export function LinkButton ({ icon, title }) {
  return (
    <Container>
      <img src={icon} alt="" />
      {title}
    </Container>
  )
}