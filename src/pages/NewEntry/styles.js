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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > div:nth-child(3) {
    margin-top: 1rem
  }

  > div:nth-child(4) {
    margin-top: 3rem;
  }

  > button {
    margin-top: 3rem
  }
`

export const BoxSuggestions = styled.div`
  height: 2rem;
  padding: 0 2rem;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
`

export const Suggestion = styled.p`
  z-index: 999;
  cursor: pointer;
`
 
export const BoxButtons = styled.div`
  margin-top: 3rem;
  padding: 0 2rem;

  display: flex;
  gap: 3rem;

`

