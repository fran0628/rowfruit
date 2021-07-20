
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MainProductFitness from './pages/MainProduct/MainProductDetail/MainProduct'
import Main from './pages/MainProduct/MainSelector/Main'
import Home from './pages/Home'
import FarmList from './pages/Blog/FarmList/FarmList'
import TopNav from './component/TopNav/TopNav'
import Footer from './component/Footer/Footer'


function App() {
  return (
		<Router>
			<>
				<TopNav/>
					
				<Switch>
					<Route path="/farmerlist">
						<FarmList />
					</Route>
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

				<Footer/>
			</>
		</Router>
	);

}

export default App;
