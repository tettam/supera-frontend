import { useState } from "react"

export const FilterArea = () => {
  const [startDate , setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [operatorName, setOperatorName] = useState('');

  return(
    <div className="flex h-20 w-full -mt-10 rounded-md bg-fuchsia-800 font-medium">
      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="text-white">Data de Inicío</h3>
          <input 
            value={startDate}
            type="date" 
            name="dataInicio" 
            id="dataInicio"
            onChange={(e) => setStartDate(e.target.value)}
            className="text-slate-700 rounded-md p-1"
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
            onChange={(e) => setEndDate(e.target.value)}
            className="text-slate-700 rounded-md p-1"
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
            onChange={(e) => setOperatorName(e.target.value)}
            className="text-slate-700 rounded-md p-1"
          />
        </div>
      </div>
    </div>
  )
}