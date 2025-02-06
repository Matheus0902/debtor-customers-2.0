import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS. BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 16rem 2rem auto;
  grid-template-areas: 
  "header"
  "ToBack"
  "main";

`
export const ToBack = styled.div`

  grid: ToBack;
  padding: 0 5rem;
  
  button {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }
`

export const MainClient = styled.div`
  grid: main;

  width: 50rem;
  margin: 0 auto;
  padding: 0 2rem;

  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: 5rem;
  }

  button:first-child {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: 10rem;
  }

  button:last-child {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem
`



