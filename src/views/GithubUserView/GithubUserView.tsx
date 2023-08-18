import { BsSunFill } from 'react-icons/bs'

import InputSearch from '../../components/inputSearch/inputSearch'
import Card from '../../components/Cards/Card'

import { useGithubUserView } from './hooks/useGithubUserView'

import { IUserData } from '../interfaces/GithubUserIntertfaces'

function GithubUserView() {

  const { 
    inputSearch, user, error, loading,
    handleSearch, onSearchUser
  } = useGithubUserView()
  return (
    <main className="bg-[#141c2f] w-screen h-screen grid place-content-center font-mono">
      <section className="w-[550px] h-1/2">
        <header className="flex justify-between mb-7 items-center">
          <h1 className="text-xl text-white">
            devfinder
          </h1>
          <h2 className="text-sm text-white flex items-center">
            LIGHT <BsSunFill className="ml-2"/>
          </h2>
        </header>
        <article className="w-full h-auto flex flex-col">
          <InputSearch 
            placeholder='Search Github username...'
            searchButtonText='Search'
            inputSearch={inputSearch}
            handleSearch={handleSearch}
            onSearchUser={onSearchUser}
          />
          <Card 
            error={error}
            user={user as IUserData}
            loading={loading}
            typeCard='githubUser'
          />
        </article>
      </section>
      
    </main>
  )
}

export default GithubUserView
