interface HeaderProps {
  avatarUrl: string,
  name: string,
  login: string,
  created: string
}

function Header( {
  avatarUrl,
  name,
  login,
  created
}: HeaderProps) {
  return (
    <>
      {/* Desktop mode */}
      <header className="w-full md:flex flex-col pl-3 hidden">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{name || '-'}</h1>
          <h3 className="text-xs text-gray-900 dark:text-white">{created || '-'}</h3>
        </div>
      </header>
      {/* Mobile mode */}
      <header className="flex md:hidden items-center">
        <img 
          className="rounded-full w-28 h-28 mr-3"
          src={avatarUrl || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
        ></img>
        <div>

          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">{name || '-'}</h1>
          <span className="text-xs text-blue-600 my-2">@{login || '-'}</span>
          <h3 className="text-xs text-gray-900 dark:text-white">{created || '-'}</h3>
        </div>
      </header>
    </>
    
  )
}

export default Header