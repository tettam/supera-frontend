'use client'

import { useState } from "react";
import { ButtonSearch } from "./components/ButtonSearch"
import { FilterArea } from "./components/FilterArea"
import { ShowMonetaryValues } from "./components/ShowMonetaryValues";
import { MoreBankStatements } from "./components/MoreBankStatements";
import { fetchApi } from "./services/fetchApi";
import { BankStatementArea } from "./components/BankStatementArea";
import { ModalAccountBack } from "./components/ModalAccountBack";
import { Exit } from "./components/Exit";

export default function Home() {
  const [id , setId] = useState('');
  const [messageErro , setMessageErro] = useState('');
  const [transactions , setTransaction] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [filters , setFilters] = useState({
    startDate: null,
    endDate: null,
    operatorName: null,
  })

  const fetchData = async () => {
    try {
      if(!id) {
        setMessageErro("*Campo obrigatório");
        return;
      }
      const response = await fetchApi(id, filters);
      setTransaction(response);
      setShowModal(false)
      resetFilter();
    } catch (error) {
      setMessageErro('*Conta não encontrada')
      resetParams()
    }
  }

  const resetFilter = () => {
    setFilters({
      ...filters,
      operatorName: null
    });
  }

  const logout = () => {
    resetParams()
    setMessageErro('')
  }

  const resetParams = () => {
    setId('')
    resetFilter()
    setTransaction(null)
    setShowModal(true)
  }

  return (
    <div className="">    
      <header className=" bg-black h-40 flex justify-center">
        <h1 className="text-white font-bold text-4xl pt-4">Sistema Bancário</h1>
      </header>
      <div className="container flex max-w-screen-lg m-auto h-screen mb-20 p-4 flex-col">
      {transactions !== undefined && transactions !== null && (
        <Exit onClick={logout} />
      )}

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
        )}/
        <MoreBankStatements />            
      </div>

      {showModal &&
        <ModalAccountBack
        message={messageErro}
        accountId={id} 
        setAccountId={setId} 
        onCLick={fetchData} 
      />   
      } 
      
    </div>
  )
}