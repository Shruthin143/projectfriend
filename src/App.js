import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sign in' exact>
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
