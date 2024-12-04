import styled from "styled-components";

export const Container = styled.a`
    width: 30rem;
    padding: 1rem 0;
    color:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: 0;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_100};
    align-items: center;
    border-radius: 1rem;
    box-shadow: .2rem .2rem ${({ theme }) => theme.COLORS.GRAY_200};
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;

    img {
        width: 4rem
    }
`