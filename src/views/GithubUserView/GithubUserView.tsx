import { BsSunFill, BsMoonFill } from 'react-icons/bs'

import InputSearch from '../../components/inputSearch/inputSearch'
import Card from '../../components/Cards/Card'

import { useGithubUser } from './hooks/useGithubUser'

import { GithubUserData } from '../../interfaces/GithubUserIntertfaces'

function GithubUserView() {
  const { 
    inputSearch, user, error, loading, darkMode,
    handleSearch, onSearchUser, handleDarkMode
  } = useGithubUser()

  return (
    <main className="bg-[#F5F8FF] dark:bg-[#141c2f] w-screen h-screen grid place-content-center font-mono">
      <section className="w-[550px] h-1/2">
        <header className="flex justify-between mb-7 items-center">
          <h1 className="text-xl text-gray-900 dark:text-white">
            devfinder
          </h1>
          <button onClick={handleDarkMode} className="text-sm text-[#1F2A48] dark:text-white flex items-center">
            {darkMode ? 'LIGHT' : 'DARK'} {!darkMode ? <BsMoonFill className="ml-2"/> : <BsSunFill className="ml-2"/> }
          </button>

        </header>
        <article className="w-full h-auto flex flex-col">
          <InputSearch 
            placeholder='Enter a github username...'
            searchButtonText='Search'
            inputSearch={inputSearch}
            handleSearch={handleSearch}
            onSearchUser={onSearchUser}
          />
          <Card 
            error={error}
            user={user as GithubUserData}
            loading={loading}
            typeCard='githubUser'
            inputSearch={inputSearch}
          />
        </article>
      </section>
      
    </main>
  )
}

export default GithubUserView
