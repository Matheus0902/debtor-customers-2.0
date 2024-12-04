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

export const MainEntry = styled.div`
  grid: main;

  width: 50rem;
  margin: 0 auto;
  padding: 5rem 2rem;

  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 5rem;
  }
`


