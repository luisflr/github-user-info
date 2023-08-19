import { useState, useEffect } from 'react'

function useDarkMode() {
  const localTheme = localStorage.theme 
      ? localStorage.theme 
      : window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light'
  const [theme, setTheme] = useState<string>(localTheme)
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement
    localStorage.setItem('theme', theme)
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])
  
  return {
    colorTheme, setTheme
  }
}

export default useDarkMode