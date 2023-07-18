"use client"

export const ModalAccountBack = ( { accountId, setAccountId , onCLick} ) => {
  return(
    <div 
      className="fixed flex items-center justify-center z-50 w-full h-screen top-0 bottom-0 bg-black bg-opacity-60">
      <div className="bg-white w-80 h-48 rounded-xl flex items-center flex-col p-2">
        <h2 className="mt-4">Qual a conta que você deseja acessar?</h2>
        <div className="flex mt-6 items-center">
          <h5 className="font-semibold">Conta:</h5>
          <input
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            type="text" 
            className="w-14 ml-2 p-1 rounded-lg font-semibold shadow-ml shadow-black border-4 outline-none"/>
        </div>

      <button
        onClick={onCLick}
        type="button" 
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-black mt-4 drop-shadow-xl">Entrar</button>
        
      </div>
      
    </div>    
  )
}