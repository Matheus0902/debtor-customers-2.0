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

export const ClientsSearch = styled.div`

  grid: main;

  width: 80rem;
  padding: 10rem 2rem;
  margin: 0 auto;

  > button {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }

  ul {
    padding: 3rem 1rem;
  }

`


