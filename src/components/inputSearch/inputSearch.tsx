import { AiOutlineSearch } from 'react-icons/ai'

interface IInputSearch {
  placeholder: string,
  inputSearch: string,
  searchButtonText: string,
  handleSearch: any,
  onSearchUser: () => void
}

function InputSearch({ 
  placeholder, inputSearch, searchButtonText,
  handleSearch, onSearchUser 
}: IInputSearch) {

  return (
    <div className="relative mb-3">
      <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch className="w-5 h-5 text-blue-600" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-4 pl-10 text-sm rounded-lg bg-[#1F2A48] placeholder-gray-300 text-white focus:ring-blue-500 focus:border-none"
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