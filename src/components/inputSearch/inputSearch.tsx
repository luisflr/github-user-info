import { AiOutlineSearch } from 'react-icons/ai'

import { InputSearchProps } from '../../interfaces/InputInterfaces'

function InputSearch({ 
  placeholder, inputSearch, searchButtonText,
  handleSearch, onSearchUser 
}: InputSearchProps) {

  return (
    <div className="relative mb-3 shadow-lg">
      <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="w-5 h-5 text-blue-600" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-4 pl-10 text-sm rounded-lg bg-white placeholder-gray-900 text-gray-900 dark:bg-[#1F2A48] dark:placeholder-gray-300 dark:text-white"
        placeholder={placeholder}
        onChange={handleSearch}
        value={inputSearch}
        required 
      />
      <button 
        type="submit" 
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        onClick={onSearchUser}
      >
        {searchButtonText}
      </button>
    </div>
  )
}

export default InputSearch