import { Container, TableDebts, BoxButtons } from "./styles"
import { Header } from "../../components/Header"
import { DebtRow } from "../../components/DebtRow"
import { Button } from "../../components/Button"

import { useNavigate } from "react-router-dom"

export function ClientDebts() {

  const navigate = useNavigate()

  function ToNewEntry() {
    navigate('/NewEntry')
  }

  return (
    <Container>
      <Header />
      <TableDebts>
        <h1>Matheus Antonio</h1>

        <table>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Itens</th>
              <th scope="col">Valor total</th>
            </tr>
          </thead>
          <tbody>
            <DebtRow 
              date='05/12/2024'
              description='3 marmitas M'
              total='R$ 45,00'
            />

            <DebtRow 
              date='05/08/2024'
              description='4 marmitas M'
              total='R$ 60,00'
            />

            <DebtRow 
              date='05/08/2024'
              description='4 marmitas M'
              total='R$ 60,00'
            />

            <DebtRow 
              date='05/08/2024'
              description='4 marmitas M'
              total='R$ 60,00'
            />
            
            <DebtRow 
              date='05/08/2024'
              description='4 marmitas M'
              total='R$ 60,00'
            />
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="2">Saldo Atual</th>
              <td>R$ 240,00</td>
            </tr>
          </tfoot>
        </table>

        <BoxButtons>
          <Button title='Download'/>
          <Button 
            title='Nova entrada'
            onClick={ToNewEntry}
          />
        </BoxButtons>
      </TableDebts>
    </Container>
  )
}