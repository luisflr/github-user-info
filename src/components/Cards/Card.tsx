import { MagnifyingGlass } from 'react-loader-spinner'

import UserGithubComponent from './UserInfoCard/GithubUserComponent'

import { CardProps } from '../../interfaces/CardInterfaces'


function Card({inputSearch, error, user, loading, typeCard}: CardProps) {
  
  const cards = {
    githubUser: <UserGithubComponent user={user}/>,
    another: <h1>another card</h1>
  }

  return (
    <section 
      className="flex bg-white dark:bg-[#1F2A48] justify-center items-center mt-4 p-7 rounded-xl w-full h-[360px] shadow-lg"
    >
      {error
        ? <div className='flex flex-col items-center'>
          <img src='https://avatars.githubusercontent.com/u/583231?v=4' className='w-64 h-64 rounded-full mb-4'/>
          <p className='text-gray-900 dark:text-white'>
            {inputSearch === ''
              ? 'Enter a github username to find the user'
              : 'User not found'
            }
          </p>
        </div>
        : loading 
          ? <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#e15b64'
          />
          : cards[typeCard]
      }
    </section>
  )
}

export default Card