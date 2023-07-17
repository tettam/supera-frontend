export const BanckStatementArea = () => {
  return(
    <table className="shadow-lg justi p-2 rounded-md mt-8 border-2 table-fixed">
      <thead className="border-blue-600 border-2 rounded-xl">
        <tr className="">
          <th className="text-left p-2 border-blue-600 border-2">Data</th>
          <th className="text-left p-2 border-blue-600 border-2">Valor</th>
          <th className="text-left p-2 border-blue-600 border-2">Tipo de Transação</th>
          <th className="text-left p-2 border-blue-600 border-2">Nome do Operador</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="p-2 border-blue-600 border-2">data</td>
          <td className="p-2 border-blue-600 border-2">123456</td>
          <td className="p-2 border-blue-600 border-2">tipo</td>
          <td className="p-2 border-blue-600 border-2">operador</td>
        </tr>
      </tbody>
    </table>
  )
}