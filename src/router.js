import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Post } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:subject/:id'>
          <Post />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
