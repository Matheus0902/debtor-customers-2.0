import { Container } from './styles'

export function Button ({ type, title }) {
  return (
    <Container type={type}>
      {title}
    </Container>
  )
}