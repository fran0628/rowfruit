
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MainProductFitness from './pages/MainProduct/MainProductDetail/MainProduct'
import Main from './pages/MainProduct/MainSelector/Main'
import Home from './pages/Home'
import FarmList from './pages/Blog/FarmList/FarmList'
import TopNav from './component/TopNav/TopNav'
import Footer from './component/Footer/Footer'
import MemberLogin from './pages/Login/MemberLogin'
import FruitMapMain from './pages/Map/FruitMapMain'
import Customized from './pages/Customized/Customized'


function App() {
  return (
		<Router>
			<>
				<TopNav/>
					
				<Switch>
					<Route path="/MemberLogin">
						<MemberLogin />
					</Route>
					<Route path="/farmerlist">
						<FarmList />
					</Route>
					<Route path="/FruitMapMain">
						<FruitMapMain />
					</Route>
					<Route path="/MainProduct">
						<MainProductFitness />
					</Route>
					<Route path="/Main">
						<Main />
					</Route>
					<Route path="/customized">
						<Customized />
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
