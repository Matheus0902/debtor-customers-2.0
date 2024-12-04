import styled from "styled-components";

export const Container = styled.li `
  width: 100%;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: .5px solid #4f4f4f3e;

  > a {
    width: 2rem;
    background-image: url('public/arrow.svg');
    background-repeat: no-repeat;
    background-size: 2rem;
    background-position: cover;
  }
`