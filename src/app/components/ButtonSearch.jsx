export const ButtonSearch = ({ onClick }) => {
  return(
    <div
      className="mt-6 flex justify-end">
      <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-slate-900  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-brue-200"
      onClick={onClick}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Pesquisar
  </span>
</button>
    </div>
  )
}