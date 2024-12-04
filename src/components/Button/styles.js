import styled from "styled-components";

export const Container = styled.button`
    width: 30rem;
    height: 5rem;
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 0 auto;
    letter-spacing: .1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 1rem;
    border: none;
`