import { Container } from './styles'

export function Input ({ icon: Icon, onClick, ...rest}) {
  return (
    <Container>
      <input {...rest}
      />
      {Icon && <Icon size={20} onClick={onClick} />}
    </Container>
  )
}