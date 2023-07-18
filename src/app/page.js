'use client'

import { useState } from "react";
import { ButtonSearch } from "./components/ButtonSearch"
import { FilterArea } from "./components/FilterArea"
import { ShowMonetaryValues } from "./components/ShowMonetaryValues";
import { MoreBankStatements } from "./components/MoreBankStatements";
import { fetchApi } from "./services/fetchApi";
import { BankStatementArea } from "./components/BankStatementArea";
import { ModalAccountBack } from "./components/ModalAccountBack";

export default function Home() {
  const [id , setId] = useState('');
  const [transactions , setTransaction] = useState(null)
  const [showModal, setShowModal] = useState(true);
  const [filters , setFilters] = useState({
    startDate: null,
    endDate: null,
    operatorName: null,
  })

  const fetchData = async () => {
    try {
      const response = await fetchApi(id, filters);
      setTransaction(response);
      setShowModal(false)
      resetFilter();
    } catch (error) {
      resetFilter()
      setTransaction('')
      setId('')
      console.log("Erro no envio da requisição")
    }
  }

  const resetFilter = () => {
    setFilters({
      ...filters,
      operatorName: null
    });
  }

  const handleFetchApi = () => {
    fetchData()
  }

  return (
    <div className="relative">
      <header className=" bg-black h-40 flex justify-center">
        <h1 className="text-white font-bold text-4xl pt-4">Sistema Bancário</h1>
      </header>
      <div className="container flex max-w-screen-lg m-auto h-screen mb-20 p-4 flex-col">

        <FilterArea 
          filterData={filters} 
          setFilterData={setFilters}
        />
        <ButtonSearch 
          onClick={fetchData} 
        />
        <ShowMonetaryValues 
          somaTotal={transactions?.somaTotal} 
          somaFiltrado={transactions?.somaFiltrado} 
        />

        {transactions !== undefined && transactions !== null && (
          <BankStatementArea 
          list={transactions.transferencias}
        />
        )}
        <MoreBankStatements />            
      </div>

      {showModal &&
        <ModalAccountBack 
        accountId={id} 
        setAccountId={setId} 
        onCLick={handleFetchApi} 
      />   
      } 
      
    </div>
  )
}