import { Button } from '../'
import { useTheme } from '../../themes/ThemeContext'
import { StyledHeader } from './styles'
import logo from '../../images/logo.png'

export function Header() {
  const { toggleTheme } = useTheme()

  return (
    <StyledHeader>
      <img src={logo} alt='Logo' />

      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </StyledHeader>
  )
}
