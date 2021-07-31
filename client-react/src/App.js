import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainProduct from "./pages/MainProduct/MainProductDetail/MainProduct";
import Main from "./pages/MainProduct/MainSelector/Main";
import Home from "./pages/Home";
import FarmList from "./pages/Blog/FarmList/FarmList";
import TopNav from "./component/TopNav/TopNav";
import MultiLevelBreadcrumb from "./component/BreadCrumb/MultiLevelBreadcrumb";
import Footer from "./component/Footer/Footer";
import MemberLogin from "./pages/Login/MemberLogin";
import FruitMapMain from "./pages/Map/FruitMapMain";
import Customized from "./pages/Customized/Customized";
import MemberRegister from "./pages/Register/MemberRegister";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import OrderList from "./pages/OrderList/OrderList";
import About from "./pages/About/about";
import Cart from "./pages/Cart/Cart"
import ScrollToTop from "./component/ScrollToTop";
import SubscribeCart from './pages/SubscribeCart/SubscribeCart'

function App() {
	const[cartUpdate,setCartUpdate]=useState(false)
	const [cart,setCart]=useState([{
		productId: 1,
		productName: "美白水果盒",
		count:1,
		amount: "不知道要說什麼反正美白水果盒很好吃",
		price: 500,
		imageUrl:""
	  }])
	console.log(cart)
	const [auth,setAuth]=useState("hi 我登入囉")

	useEffect(()=>{
		setAuth("嗨嗨嗨嗨")
	},[])

  return (
		<Router>
			<>
				<ScrollToTop>
					<TopNav auth={auth} cartUpdate={cartUpdate} setCartUpdate={setCartUpdate} />
					<MultiLevelBreadcrumb />

					<Switch>
						<Route path="/cart">
							<Cart cart={cart} />
						</Route>
						<Route path="/subscribecart">
							<SubscribeCart />
						</Route>
						<Route path="/orderlist">
							<OrderList />
						</Route>
						<Route path="/memberdashboard">
							<UserDashboard />
						</Route>
						<Route path="/memberlogin">
							<MemberLogin setAuth={setAuth} />
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
							<MainProduct setCartUpdate={setCartUpdate}/>
						</Route>
						<Route path="/Main">
							<Main />
						</Route>
						<Route path="/customized">
							<Customized setTotalCart={setCart} setCartUpdate={setCartUpdate} />
						</Route>
						<Route path="/About">
							<About />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</>
		</Router>
	);
}

export default App;
