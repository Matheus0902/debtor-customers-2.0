import styled from "styled-components";

export const Container = styled.form`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > label {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`

export const BoxButton = styled.div`
  width: 100%;
  margin: 3rem auto;
`


