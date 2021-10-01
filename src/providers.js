import { ThemeContextProvider } from './themes/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'

export function Providers({ children }) {
  return (
    <ThemeContextProvider>
      {children}
      <GlobalStyles />
    </ThemeContextProvider>
  )
}
