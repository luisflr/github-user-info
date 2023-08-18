import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from 'react-icons/fa'
import { UserInfoProps } from '../../../views/interfaces/GithubUserIntertfaces'

function UserGithubComponent ({ user }: UserInfoProps) {
  const userBlogURL = user.blog.includes('https://') ? user.blog : `https://${user.blog}`

  return (
    <>
      <div className='flex h-full items-start '>
        <img 
          className="rounded-full w-36 h-28"
          src={user.avatar_url || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
        ></img>
      </div>
      <div className="w-full h-full flex flex-col pl-3">
        <header className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold text-white">{user.name || '-'}</h1>
          <h3 className="text-xs text-white">{user.created_at || '-'}</h3>
        </header>
        <span className="text-xs text-blue-600 my-2">@{user.login || '-'}</span>
        <p className="text-sm text-gray-300 my-2">This profile has no bio</p>
        <ul className="flex justify-around w-full bg-[#141c2f] rounded-md my-4 py-4">
          <li>
            <span className="text-sm text-gray-300">Repos</span>
            <p className="text-white font-semibold">{user.public_repos || '-'}</p>
          </li>
          <li>
            <span className="text-sm text-gray-300">Followers</span>
            <p className="text-white font-semibold">{user.followers || '-'}</p>
          </li>
          <li>
            <span className="text-sm text-gray-300">Following</span>
            <p className="text-white font-semibold">{user.following || '-'}</p>
          </li>
        </ul>
        <div className="grid grid-cols-2 mt-3 gap-4 w-full text-sm">
          <span className="text-gray-300 flex items-center">
            <FaMapMarkerAlt className="mr-2"/> {user.location || '-'}
          </span>
          
          <span className="text-gray-400 flex items-center">
            <FaTwitter className="mr-2"/> {user.twitter_username || '-'}
          </span>
          
          <a href={userBlogURL} className="text-gray-300 flex items-center">
            <FaLink className="mr-2"/> {userBlogURL}
          </a>
          
          <span className="text-gray-300 flex items-center">
            <FaBuilding className="mr-2"/> {user.type || '-'} 
          </span>
          
        </div>
      </div>
    </>
  )
}

export default UserGithubComponent