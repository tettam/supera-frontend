import { BankStatementItem } from "./BankStatementItem"


export const BankStatementArea = ({ list }) => {
  return(
    <table className="shadow-lg justi p-2 mt-8 table-auto">
      <thead className="border-blue-600 border-4 rounded-xl">
        <tr className="">
          <th className="text-left p-2 border-blue-600 border-4">Data</th>
          <th className="text-left p-2 border-blue-600 border-4">Valor</th>
          <th className="text-left p-2 border-blue-600 border-4">Tipo de Transação</th>
          <th className="text-left p-2 border-blue-600 border-4">Nome do Operador</th>
        </tr>
      </thead>

      <tbody>
        {list && 
        list.map((item) => (
          <BankStatementItem key={item.id} item={item}/>
        ))
        }   
      </tbody>
    </table>
  )
}