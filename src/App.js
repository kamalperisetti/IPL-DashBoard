import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LatestMatch from './components/LatestMatch'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={LatestMatch} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
