import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 1rem;
    
    > input {
        width: 100%;
        height: 4.5rem;
        font-family: "Nunito";
        outline: none;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 2rem;
        background-color: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            opacity: .4;
        }

    }

    > svg {
        margin-right: 1rem;
        background-color: transparent;
    }

`