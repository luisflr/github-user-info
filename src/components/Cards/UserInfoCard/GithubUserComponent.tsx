import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from 'react-icons/fa'
import { GithubUserProps } from '../../../interfaces/GithubUserIntertfaces'
import Header from './Header'

function GithubUserComponent ({ user }: GithubUserProps) {
  const userBlogURL = user.blog.length === 0 || !user.blog
  ? '-'
  : user.blog.includes('https://') ? user.blog : `https://${user.blog}`

  return (
    <>
      <div className='hidden md:flex h-full items-start'>
        <img 
          className="rounded-full w-36 h-28"
          src={user.avatar_url || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
        ></img>
      </div>
      <div className="w-full h-full flex flex-col pl-3">
        <Header 
          avatarUrl={user.avatar_url}
          name={user.name}
          login={user.login}
          created={user.created_at}
        />
        <span className="hidden md:block text-xs text-blue-600 ml-3">@{user.login || '-'}</span>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 mb-2 ml-3">{user.bio || 'This profile has no bio'}</p>
        <ul className="flex justify-around w-full bg-blue-100 dark:bg-[#141c2f] rounded-md my-4 py-4">
          <li>
            <span className="text-sm text-gray-600 dark:text-gray-300">Repos</span>
            <p className="text-gray-800 dark:text-gray-300 font-semibold">{user.public_repos || '-'}</p>
          </li>
          <li>
            <span className="text-sm text-gray-600 dark:text-gray-300">Followers</span>
            <p className="text-gray-800 dark:text-gray-300 font-semibold">{user.followers || '-'}</p>
          </li>
          <li>
            <span className="text-sm text-gray-600 dark:text-gray-300">Following</span>
            <p className="text-gray-800 dark:text-gray-300 font-semibold">{user.following || '-'}</p>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-4 w-full text-sm">
          <span className="text-gray-600 dark:text-gray-300 flex items-center">
            <FaMapMarkerAlt className="mr-2"/> {user.location || '-'}
          </span>
          
          <span className="text-gray-600 dark:text-gray-300 flex items-center">
            <FaTwitter className="mr-2"/> {user.twitter_username || '-'}
          </span>
          
          <a href={userBlogURL} className="text-gray-600 dark:text-gray-300 flex items-center">
            <FaLink className="mr-2"/> {userBlogURL}
          </a>
          
          <span className="text-gray-600 dark:text-gray-300 flex items-center">
            <FaBuilding className="mr-2"/> {user.type || '-'} 
          </span>
          
        </div>
      </div>
    </>
  )
}

export default GithubUserComponent