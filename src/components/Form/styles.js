import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
  margin: 0 auto;
`


