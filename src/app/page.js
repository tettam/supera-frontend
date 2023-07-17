'use client'

import { FilterArea } from "./components/FilterArea"

export default function Home() {
  return (
    <div>
      <header className=" bg-black h-40 flex justify-center">
        <h1 className="text-white font-bold text-3xl pt-4">Sistema Bancário</h1>
      </header>
      <div className="container flex max-w-screen-lg m-auto h-screen justify-center mb-20">

        <FilterArea />
        
      </div>
    </div>
  )
}