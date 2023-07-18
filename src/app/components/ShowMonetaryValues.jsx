export const ShowMonetaryValues = ( {somaTotal, somaFiltrado} ) => {
  return(
    <div className="flex h-14 w-full mt-14 border-2 border-blue-600 shadow-lg justi items-center p-2 font-medium rounded-md">
      <div className="mr-6 ml-4">
        <h4>Saldo Total</h4>
        <div  className={`font-semibold ${somaTotal < 0 ? 'text-red-600' : 'text-green-700'}`}>R$ {somaTotal ? somaTotal.toFixed(2) : '-'}</div>
      </div>
      <div>
        <h4>Saldo do Período</h4>
        <div className={`font-semibold ${somaFiltrado < 0 ? 'text-red-600' : 'text-green-700'}`}>R$ {somaFiltrado ? somaFiltrado.toFixed(2) : '-'}</div>
      </div>
    </div>
  )
}