import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 160px auto;
  grid-template-areas: 
  "header"
  "menu";
`

export const Menu = styled.nav`
  grid-area: menu;
  
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;

  svg {
    font-size: 3rem
  }
`

export const LinkButton = styled(Link)`
    width: 30rem;
    padding: 1rem 0;
    color:  ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: 0;
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
    align-items: center;
    border-radius: 1rem;
    box-shadow: .2rem .2rem ${({ theme }) => theme.COLORS.GRAY_200};
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;

    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

`
