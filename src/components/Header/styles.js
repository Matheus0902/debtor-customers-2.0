import styled from "styled-components";

export const Container = styled.header `
  grid-area: header;

  width: 100%;
  height: 10rem;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    gap: .5rem;

    > h1 {
      font-size: 2.5rem;
    }
   
    span:first-child {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span:last-child {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }  
`
