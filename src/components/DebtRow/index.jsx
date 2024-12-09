import { Container } from './styles'

export function DebtRow ({date, description, total}) {
  return (
    <Container>
      <td>{date}</td>
      <td>{description}</td>
      <td>{total}</td>
    </Container>
  )
}