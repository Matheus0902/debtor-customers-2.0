import styled from "styled-components";

export const Container = styled.header `
  grid-area: header;

  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    margin: 0 3rem;
  }   
`
