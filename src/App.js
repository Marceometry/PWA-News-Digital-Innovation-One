import { Router } from './router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Wrapper } from './styles/Wrapper'
import 'antd/dist/antd.css'

export default function App() {
  return (
    <Wrapper>
      <Router />
      <GlobalStyles />
    </Wrapper>
  )
}
