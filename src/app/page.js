'use client'

import { useState } from "react";
import { ButtonSearch } from "./components/ButtonSearch"
import { FilterArea } from "./components/FilterArea"

export default function Home() {
  const [filters , setFilters] = useState({
    startDate: null,
    endDate: null,
    operatorName: '',
  })

  const handleClick = () => {
    console.log(filters);
  }

  return (
    <div className="">
      <header className=" bg-black h-40 flex justify-center">
        <h1 className="text-white font-bold text-4xl pt-4">Sistema Bancário</h1>
      </header>
      <div className="container flex max-w-screen-lg m-auto h-screen mb-20 p-4 flex-col">

        <FilterArea filterData={filters} setFilterData={setFilters}/>
        <ButtonSearch onClick={handleClick} />
      </div>
    </div>
  )
}