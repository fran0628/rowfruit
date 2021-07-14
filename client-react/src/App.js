import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MainProductWhitening from './pages/MainProduct/MainProductDetail/MainProductWhitening'
import MainProductFitness from './pages/MainProduct/MainProductDetail/MainProductFitness'
import Main from './pages/MainProduct/MainSelector/Main'
import Home from './pages/Home'


function App() {
  return (
    <Router>
       <>
        <Link to="/">Home</Link>
        <Link to="/Main">Main</Link>
        <Link to="/MainProductWhitening">MainProductWhitening</Link>
        <Link to="/MainProductFitness">MainProductFitness</Link>

        <Switch>
          <Route path="/MainProductFitness">
            <MainProductFitness />
          </Route>
          <Route path="/MainProductWhitening">
            <MainProductWhitening />
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
       </>
    </Router>
  )
}

export default App;
