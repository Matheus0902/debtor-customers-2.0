import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.COLORS. BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 16rem 2rem auto;
  grid-template-areas: 
  "header"
  "ToBack"
  "main";

`
export const ToBack = styled.div`

  width: 100%;
  grid-area: ToBack;
  padding: 0 5rem;
  
  button {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }
`

export const ClientsSearch = styled.div`

  grid-area: main;

  width: 80rem;
  padding: 10rem 2rem;
  margin: 0 auto;

  > ul {
    max-height: 30rem;
    overflow-y: auto;
   
    &::-webkit-scrollbar {
    display: none;
    }
  }


  > button {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }

  ul {
    padding: 3rem 1rem;
  }

`

export const ClientShow = styled.li `
  width: 100%;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: .5px solid #4f4f4f3e;

`

export const LinkButton = styled(Link)`
    
  width: 2rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    font-size: 2rem;
  }

`


