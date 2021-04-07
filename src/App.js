import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Planets from './Components/Planets'
import StarShips from './Components/StarShips'
import Nav from './Components/Nav'
function App() {
  return (
    <Router>
      <div className=''>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/planets' component={Planets} />
          <Route path='/ships' component={StarShips} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
