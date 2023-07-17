import { useState } from "react"

export const FilterArea = () => {
  const [startDate , setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [operatorName, setOperatorName] = useState('');

  return(
    <div className="flex h-16 w-full -mt-10 rounded-md bg-gray-300 font-medium">
      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3>Data de Inicío</h3>
          <input 
            value={startDate}
            type="date" 
            name="dataInicio" 
            id="dataInicio"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="">Data Final</h3>
          <input
            value={endDate}
            type="date" 
            name="dataFinal" 
            id="dataFinal"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h3 className="">Nome do operador</h3>
          <input 
            value={operatorName}
            type="text"
            name="nomeOperadorTransicao" 
            id="nomeOperadorTransicao"
            onChange={(e) => setOperatorName(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}