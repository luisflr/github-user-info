import { useState, useEffect } from "react"
import { getUser } from "../../../services/userService"
import { IUserData } from "../../interfaces/GithubUserIntertfaces"

export const useGithubUserView = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [search, setSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<IUserData>()
  const [error, setError] = useState(true)

  const handleSearch = (e: { target: { value: string; }; }) => {
    setInputSearch(e.target.value)
  }

  const onSearchUser = () => setSearch(true)

  
  
  const handleUser = async () => {
    setLoading(true)
    try {
      const user: IUserData = await getUser(inputSearch)
      setUser(user)
      setLoading(false)
      setSearch(false)
      setError(!user.id)
    } catch (error) {
      setLoading(false)
      setSearch(false)
      setError(true)
    }
  }

  useEffect(()=> {
    if (search && inputSearch !== '') handleUser()
    setSearch(false)
  }, [search])

  return {
    // States
    inputSearch,
    loading,
    user,
    error,
    // State Functions

    // Functions
    handleSearch,
    onSearchUser
  }
}