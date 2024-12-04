import { Container, InputWraper, BoxButton } from "./styles"
import { Input } from "../Input"
import { Button } from "../Button"

export function Form({ inputOne, inputTwo, inputThree, button }) {
  return (
    <Container>
      <InputWraper>
        <label htmlFor={inputOne}>{inputOne}</label>
        <Input 
          type='text'
          id={inputOne}
        />
      </InputWraper>
          
      <InputWraper>
      <label htmlFor={inputTwo}>{inputTwo}</label>
        <Input 
          type='text'
          id={inputTwo}
        />
      </InputWraper>

      <InputWraper>
      <label htmlFor={inputThree}>{inputThree}</label>
        <Input 
          type='text'
          id={inputThree}
        />
      </InputWraper>

      <BoxButton>
        <Button 
          type='submit'
          title={button}
        />
      </BoxButton>
    </Container>
  )
}