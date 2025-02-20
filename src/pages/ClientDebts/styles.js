import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 16rem 3rem auto 10rem;
  grid-template-areas: 
  "header"
  "toBack"
  "TableDebts"
  "BoxButtons"
  ;

`

export const TableDebts = styled.div`

  grid-area: TableDebts;

  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const TableWrapper = styled.div`

  width: 80%;
  height: 40rem;
  overflow-y: auto;
  margin-top: 5rem;

  &::-webkit-scrollbar {
    display: none;
  }
  
  > table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border: 2px solid  ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    thead th {
      padding: 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    th:nth-child(-n+2) {
      border-right: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    tbody tr:nth-child(odd)  td {
      background-color:  ${({ theme }) => theme.COLORS.GRAY_200};
    }

    tbody tr:last-child td {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    tfoot tr td {
      font-weight: bold;
      padding: 1rem;
    }

  }
`

export const SimulatedHeader = styled.div`
  
  margin-top: 5rem;

  display: flex;
`

export const ToBack = styled.div`

  width: 100%;
  grid-area: toBack;
  padding: 0 5rem;
  
  button {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    margin-bottom: 10rem;
  }
`

export const BoxOrganizer = styled.div`
  grid-area: BoxButtons;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  margin: 5rem 0;

  > div {
    width: 20rem;

  }

  > button:nth-child(3),
    button:nth-child(4),
    button:nth-child(5) {
      width: 15rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-weight: bold;
  }
  
  > button {
    width: 20rem;
    height: 3.5rem;
  }
`

export const Message = styled.p`
  margin-top: 15rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.COLORS.GREEN};
`


