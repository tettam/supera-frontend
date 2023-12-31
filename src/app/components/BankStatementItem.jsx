import { formatDate } from "../helpers/dataFilter"

export const BankStatementItem = ({ item }) => {
  return (
    <tr>
      <td className="p-2 border-blue-600 border-2">{formatDate(item.dataTransferencia)}</td>
      <td className={`p-2 border-blue-600 border-2 font-semibold ${item.valor < 0 ? 'text-red-600' : 'text-green-700'}`}>
        R$ {item.valor.toFixed(2)}
      </td>
      <td className="p-2 border-blue-600 border-2">{item.tipo}</td>
      <td className="p-2 border-blue-600 border-2">{item.nomeOperadorTransicao ?? '-'}</td>
    </tr>
  )
}
