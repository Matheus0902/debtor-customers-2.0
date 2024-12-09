import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
  text-align: center;
  
  > header {
    width: 100%;
    height: 13rem;

    display: flex;

    padding: 0 10rem;

    > button {
      background: none;
      border: none;

    > svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  }

`

export const Form = styled.form`
  max-width: 30rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  > h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 5rem;
  }

  > div:nth-child(4) {
    margin-top: 1rem;
  }

  > button {
    margin-top: 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background: ${({ theme }) => theme.COLORS.ORANGE};
  }

`

export const InputWraper = styled.div`
  width: 100%;
`


