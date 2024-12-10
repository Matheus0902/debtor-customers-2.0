import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 16rem 2rem auto;
  grid-template-areas: 
  "header"
  "ToBack"
  "main";

  > svg {
    margin: 0 6rem;
    font-size: 2rem;
  }

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

export const MainEntry = styled.div`
  grid: main;

  width: 50rem;
  margin: 0 auto;
  padding: 0rem 2rem;

  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: 5rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`


