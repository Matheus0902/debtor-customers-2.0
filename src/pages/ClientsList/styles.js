import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS. BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 160px auto;
  grid-template-areas: 
  "header"
  "main";

`

export const ClientsSearch = styled.div`

  grid: main;
  padding: 5rem 2rem;

  ul {
    padding: 3rem 1rem;
  }
`


