import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsSunFill } from 'react-icons/bs'

function App() {

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
          <label className="mb-2 text-md font-medium sr-only text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineSearch className="w-5 h-5 text-blue-600" />
              </div>
              <input type="search" id="search" className="block w-full p-4 pl-10 text-sm rounded-lg bg-[#1F2A48] placeholder-gray-300 text-white focus:ring-blue-500 focus:border-none" placeholder="Search Github username..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
          <section className="flex bg-[#1F2A48] mt-4 p-7 rounded-xl">
            <div>
              <img 
                className="rounded-full"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              ></img>
            </div>
            <div className="w-full flex flex-col pl-3">
              <header className="w-full flex justify-between items-center">
                <h1 className="text-lg font-semibold text-white">The Octocat</h1>
                <h3 className="text-xs text-white">Joined 25 Jan 2011</h3>
              </header>
              <span className="text-xs text-blue-600 my-2">@Octocat</span>
              <p className="text-sm text-gray-300 my-2">This profile has no bio</p>
              <ul className="flex justify-around w-full bg-[#141c2f] rounded-md my-2 py-4">
                <li>
                  <span className="text-sm text-gray-300">Repos</span>
                  <p className="text-white font-semibold">8</p>
                </li>
                <li>
                  <span className="text-sm text-gray-300">Followers</span>
                  <p className="text-white font-semibold">3938</p>
                </li>
                <li>
                  <span className="text-sm text-gray-300">Following</span>
                  <p className="text-white font-semibold">9</p>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-3 mt-2 w-full">
                <span className="text-gray-300 flex items-center"> <FaMapMarkerAlt className="mr-2"/> San Francisco</span>
                
                <span className="text-gray-400 flex items-center"> <FaTwitter className="mr-2"/>Not Available</span>
                
                <span className="text-gray-300 flex items-center"> <FaLink className="mr-2"/> https://github.blog</span>
                
                <span className="text-gray-300 flex items-center"> <FaBuilding className="mr-2"/> @github</span>
                
              </div>
            </div>
          </section>
        </article>
      </section>
      
    </main>
  )
}

export default App
