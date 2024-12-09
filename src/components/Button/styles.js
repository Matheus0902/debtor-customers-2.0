import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 0 auto;
    letter-spacing: .1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 1rem;
    border: none;
`