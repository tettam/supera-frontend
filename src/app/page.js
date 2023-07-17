'use client'

import { useState } from "react";
import { ButtonSearch } from "./components/ButtonSearch"
import { FilterArea } from "./components/FilterArea"
import { ShowMonetaryValues } from "./components/ShowMonetaryValues";
import { MoreBankStatements } from "./components/MoreBankStatements";
import { fetchApi } from "./services/fetchApi";
import { BankStatementArea } from "./components/BankStatementArea";

export default function Home() {
  const [transactions , setTransaction] = useState('')
  const [filters , setFilters] = useState({
    startDate: null,
    endDate: null,
    operatorName: null,
  })

  const fetchData = async () => {
    try {
      const response = await fetchApi(filters);
      setTransaction(response);
      resetFilter();
    } catch (error) {
      console.log("Erro no envio da requisição")
    }
  }

  const resetFilter = () => {
    setFilters({
      ...filters,
      operatorName: null
    });
  }

  return (
    <div className="">
      <header className=" bg-black h-40 flex justify-center">
        <h1 className="text-white font-bold text-4xl pt-4">Sistema Bancário</h1>
      </header>
      <div className="container flex max-w-screen-lg m-auto h-screen mb-20 p-4 flex-col">

        <FilterArea filterData={filters} setFilterData={setFilters}/>
        <ButtonSearch onClick={fetchData} />
        <ShowMonetaryValues />
        <BankStatementArea list={transactions}/>
        <MoreBankStatements />
      </div>
    </div>
  )
}