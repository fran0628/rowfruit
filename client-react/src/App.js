
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import MainProductFitness from './pages/MainProduct/MainProductDetail/MainProduct'
import Main from './pages/MainProduct/MainSelector/Main'
import Home from './pages/Home'
import FarmList from './pages/Blog/FarmList/FarmList'
import TopNav from './component/TopNav/TopNav'
import MultiLevelBreadcrumb from './component/BreadCrumb/MultiLevelBreadcrumb'
import Footer from './component/Footer/Footer'
import MemberLogin from './pages/Login/MemberLogin'
import FruitMapMain from './pages/Map/FruitMapMain'
import Customized from './pages/Customized/Customized'
import MemberRegister from './pages/Register/MemberRegister'
import About from './pages/About/about'

function App() {
  return (
		<Router>
			<>
				<TopNav/>
				<MultiLevelBreadcrumb/>
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
					<Route path="/MainProduct/:id?">
						<MainProductFitness />
					</Route>
					<Route path="/Main">
						<Main />
					</Route>
					<Route path="/customized">
						<Customized />
					</Route>
					<Route path="/About">
           			 <About />
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
