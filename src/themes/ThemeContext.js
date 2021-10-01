import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './themes'

export const ThemeContext = createContext({})

export function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes[currentTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
