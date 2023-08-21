import { useState, useEffect, ChangeEvent } from "react"

import { getUser } from "../../../services/userService"
import { GithubUserData } from "../../../interfaces/GithubUserIntertfaces"
import useDarkMode from "./useDarkMode"

export const useGithubUser = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [search, setSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<GithubUserData>()
  const [error, setError] = useState(true)
  const { colorTheme, setTheme } = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const handleDarkMode = () => {
      setTheme(colorTheme);
      setDarkMode(!darkMode);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  const handleSearchUser = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true)
  }
  
  const handleUser = async () => {
    setLoading(true)
    try {
      const user: GithubUserData = await getUser(inputSearch)
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
    darkMode,
    // State Functions

    // Functions
    handleSearch,
    handleSearchUser,
    handleDarkMode
  }
}