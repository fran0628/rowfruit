
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MainProductFitness from './pages/MainProduct/MainProductDetail/MainProduct'
import Main from './pages/MainProduct/MainSelector/Main'
import Home from './pages/Home'


function App() {
  return (
    <Router>
       <>
        <Link to="/">Home</Link>
        <Link to="/Main">Main</Link>
        <Link to="/MainProduct">MainProduct</Link>

        <Switch>
          <Route path="/MainProduct">
            <MainProductFitness />
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
