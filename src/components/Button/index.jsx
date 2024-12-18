import { Container } from './styles'

export function Button ({ type, title, ...rest }) {
  return (
    <Container 
    type={type}
    {...rest}
    >
      {title}
    </Container>
  )
}