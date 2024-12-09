import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS. BACKGROUND_MAIN};

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 16rem auto 10rem;
  grid-template-areas: 
  "header"
  "TableDebts"
  "BoxButtons";

`

export const TableDebts = styled.div`

  grid: TableDebts;

  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > table {
    width: 100%;
    text-align: center;
    margin-top: 5rem;
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

export const BoxButtons = styled.div`
  grid: BoxButtons;

  display: flex;
  gap: 2rem;
  margin-top: 5rem;
  
  > button {
    width: 15rem;
    height: 3.5rem;
  }
`


