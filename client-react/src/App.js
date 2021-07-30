import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainProductFitness from "./pages/MainProduct/MainProductDetail/MainProduct";
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
	// console.log(cart)
	console.log(cart)
	
	const [auth,setAuth]=useState("hi 我登入囉")
	const [data,setData]=useState({account:"",password:""})
	const [showData,setShowdata]=useState(false)

	console.log("data",data)
	
	 function fetchSetData(data) {
		// await fetch("http://localhost:5000/api/login", {
		//   method: "POST",
		//   headers: {
		// 	'Content-type': 'application/json'
		//   },
		//   body: JSON.stringify({ data })
		// })
		 fetch("http://localhost:5000/api/login", {
			method: "POST",
			body: JSON.stringify({data}), 
			headers: new Headers({
				"Content-Type": "application/json",
				}),
			})
			.then( res => {
				console.log(res)
			  return res.json();
			}).then(result => {
			   localStorage.setItem("token", result.data.token);
			  // token解析
			  const token = result.data.token.split(" ")[1];
	  
			  let payload = JSON.parse(atob(token.split(".")[1]));
	  
			  // console.log("res :",res)
	  
			  console.log("res=>", payload);
			  console.log(result.data.name);
			});
	  }

	useEffect(()=>{
		console.log("初始值測試")
		if(showData){
			fetchSetData()
		}
		setShowdata(false)
	},[data])

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
							<MemberLogin setAuth={setAuth} setData={setData} data={data} setShowdata={setShowdata} />
						</Route>
						<Route path="/memberegister">
							<MemberRegister />
						</Route>
						<Route path="/farmerlist">
							<FarmList />
						</Route>
						<Route path="/fruitmap">
							<FruitMapMain />
						</Route>
						<Route path="/MainProduct/:id?">
							<MainProductFitness />
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
