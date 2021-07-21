
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
<<<<<<< HEAD
import Customized from './pages/Customized/Customized'
=======
import MemberRegister from './pages/Register/MemberRegister'
>>>>>>> f07ac9da604e082640b93b5ee8485ccc97aff78c


function App() {
  return (
		<Router>
			<>
				<TopNav/>
					
				<Switch>
					<Route path="/memberlogin">
						<MemberLogin />
					</Route>
					<Route path="/memberegister">
						<MemberRegister />
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
