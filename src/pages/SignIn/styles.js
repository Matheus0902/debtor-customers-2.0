import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: stretch;
  justify-content: center;

  
`

export const Form = styled.form`
  padding: 0 13rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 3rem;
  }

  > p {
    margin-top: .5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    margin: 3rem 0;
  }

  > Button {
    margin-top: 1rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 8rem;
  }

`

export const InputWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`


