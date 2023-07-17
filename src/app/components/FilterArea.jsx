export const FilterArea = ({filterData , setFilterData}) => {
  const { startDate , endDate, operatorName} = filterData;

  return(
    <div className="flex h-20 w-full -mt-14 rounded-md overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="text-white">Data de Inicío</h3>
          <input 
            value={startDate}
            type="date" 
            name="dataInicio" 
            id="dataInicio"
            onChange={(e) => setFilterData({...filterData, startDate: e.target.value})}
            className="text-slate-700 rounded-md p-1 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="text-white">Data Final</h3>
          <input
            value={endDate}
            type="date" 
            name="dataFinal" 
            id="dataFinal"
            onChange={(e) => setFilterData({...filterData, endDate: e.target.value})}
            className="text-slate-700 rounded-md p-1 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="text-white">Nome do operador</h3>
          <input 
            value={operatorName}
            type="text"
            name="nomeOperadorTransicao" 
            id="nomeOperadorTransicao"
            onChange={(e) => setFilterData({...filterData, startDate: e.target.value})}
            className="text-slate-700 rounded-md p-1 outline-none w-36"
          />
        </div>
      </div>
    </div>
  )
}