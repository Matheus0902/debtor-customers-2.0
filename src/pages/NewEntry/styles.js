import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 160px auto;
  grid-template-areas: 
  "header"
  "main";

  > svg {
    margin: 0 6rem;
    font-size: 2rem;
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

  button:first-child {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }

  button:last-child {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`


