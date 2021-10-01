import { Router } from './router'
import { Header } from './components'
import { Wrapper } from './styles/Wrapper'
import 'antd/dist/antd.css'

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Router />
    </Wrapper>
  )
}
