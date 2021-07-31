import React,{useState,useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
	// console.log(cart)
	// console.log(cart)
	const username = localStorage.getItem('name');
	const [islogin,setIslogin]=useState({
		islogin:username?true:false,
		name:username?username:''
	})

	const [auth,setAuth]=useState("hi XXX")
	const [data,setData]=useState({account:"",password:""})
	const [showData,setShowdata]=useState(false)

	console.log("data",data)
	console.log(islogin)

	 function fetchSetData() {
	let body = { account: data.account, password: data.password };

    axios
      .post(`http://localhost:5000/api/login`, body)

      .then((res) => {
		  if(res.data.code===200) {

			// token解析
			const token = res.data.data.token.split(" ")[1];
	
			let payload = JSON.parse(atob(token.split(".")[1]));
	
			console.log("res=>", payload);
			console.log(res.data.data.name);
			let username = res.data.data.name;
			localStorage.setItem("token", res.data.data.token);
			localStorage.setItem("name", username);
			setIslogin({
				islogin:true,
				name:username
			})
			Swal.fire({
				position: 'center-center',
				icon: 'success',
				title: '登入成功',
				showConfirmButton: false,
				timer: 5000,
			  })
			window.location.href = 'about'
		  } else {
			Swal.fire({
				position: 'top-top',
				icon: 'error',
				title: '帳號或密碼有錯',
				showConfirmButton: false,
				timer: 1500,
			  })
		  }
      });
	  }

	useEffect(()=>{
		// console.log("初始值測試")
		if(showData){
			console.log('AAAs')
			fetchSetData()
		}
		setShowdata(false)
	},[data])

  return (
		<Router>
			<>
				<ScrollToTop>
					<TopNav checkLogin={islogin}  auth={auth} cartUpdate={cartUpdate} setCartUpdate={setCartUpdate} />
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
