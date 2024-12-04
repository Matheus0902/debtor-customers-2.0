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
  "menu";
`

export const Menu = styled.nav`
  grid: menu;
  
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  margin-top: 20rem;
`
