import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > input {
        width: 100%;
        height: 4.5rem;
        font-family: "Nunito";
        outline: none;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 2rem;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 1rem;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            opacity: .4;
        }

    }

`