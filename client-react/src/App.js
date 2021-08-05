import React,{useState,useEffect} from "react";
import { useContext } from "react";
import { Context } from "./context/Context.js";
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
import Blog from "./pages/Blog/BlogPage/BlogPage";
import FarmerRegister from "./pages/FarmerRegister/FarmerRegister";
import FarmerLogin from "./pages/FarmerLogin/FarmerLogin";
import SinglePage from "./pages/Blog/SinglePage/SinglePage";
import FarmerUserDashboard from "./pages/FarmerUserDashboard/FarmerUserDashboard";
import ScrollToTop from "./component/ScrollToTop";
import SubscribeCart from './pages/SubscribeCart/SubscribeCart'
import WritePage from "./pages/Blog/WritePage/WritePage.js";
import EditPage from "./pages/Blog/EditPage/EditPage";
import ChangePassword from "./pages/ChangePassword/ChangePassword"
import SubPay from './pages/SubscribeCart/SubPay/SubPay'

function App() {
	const { farmeruser } = useContext(Context);

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

	const [data,setData]=useState({account:"",password:""})
	const [register,setRegister]=useState({fullname:"", account:"", password:"", repassword:"", email:"",address:"",phone:""})
	const [showData,setShowdata]=useState(false)

	// console.log("data",data)
	// console.log(islogin)

	//  JWT 轉成 JSON 的 方法 大家可以參考使用喔
	// 先設鉤子設定初始狀態
	// const [userData,setUserData]=useState({
	// 	id:"",
	// 	account:"",
	// 	name:"",
	// 	password:"",
	// 	email:"",
	// 	phone:"",
	// 	address:"",
	// 	avatar:"",
	// 	file:null
	//   })
	//   function getUserDetail(){
	// 	const token = localStorage.getItem('token').split(" ")[1];
		
	// 	let payload = JSON.parse(atob(token.split(".")[1]));
	// 	axios
	// 	.get('http://localhost:5000/api/member/'+payload.id)
	  
	// 	.then((res) => {
		// 撈回來了所有資料
	// 	  console.log(res.data[0]);
	// 	  const data = res.data[0];
	// 	  setUserData({
	// 	  id:data.id,
	// 	  account:data.account,
	// 	  name:data.name,
	// 	  password:data.password,
	// 	  email:data.email,
	// 	  phone:data.phone,
	// 	  address:data.address,
	// 	  file:data.file,
	// 	  avatar:data.avatar
	// 	})
	// 	})
	// }
	// Login axiox api
	function fetchSetData() {
		let body = { account: data.account, password: data.password };
		
		if(data.account==='') {
			dialog('請輸入帳號');
		}else if ( data.password==='') {
			dialog('請輸入密碼');
		}else if (  data.password.length<6) {
			dialog('密碼長度最少需六個字元');
		}
		else {
			axios
			.post(`http://localhost:5000/api/login`, body)
	
			.then((res) => {
				if(res.data.code===200) {
	
				// token解析
				const token = res.data.data.token.split(" ")[1];			
				console.log("token :",token)

				let payload = JSON.parse(atob(token.split(".")[1]));
		
				// console.log("res=>", payload);
				console.log("res.data.data=>", res.data.data);
				// console.log("res.data.data.name",res.data.data.name);
				let username = res.data.data.name;
				localStorage.setItem("token", res.data.data.token);
				localStorage.setItem("name", username);
				setIslogin({
					islogin:true,
					name:username
				})
				
				Swal.fire({
					icon: "success",
					title: "登入成功",
					text: `Hi!${username}，歡迎來到rowfruit`,
					animation: true,
					confirmButtonText: "關閉",
					timer: 2000,
					onClose:changePage()
					})
					function changePage(){
						// console.log('changePage');
					setTimeout(()=>{
						window.location.href = '/'
					},2000)
					}
					//console.log("changePage:",changePage)
				} 
				if(res.data.code===401){
					console.log('AAAAAAAA')
					Swal.fire({
						icon: 'info',
						title: '帳號或密碼有誤',
						showConfirmButton: false,
						timer: 2000,
					})
				}
	
				
			});
		}

	}


	function dialog(text) {
		Swal.fire({
			position: 'center',
			icon: 'info',
			title: text,
			showConfirmButton: false,
			timer: 2000,
		})
	}

	useEffect(()=>{
		if(showData){
			// console.log('AAAs')
			fetchSetData()
		}else{
			setShowdata(false)
		}
	},[data])

  return (
		<Router>
			<>
				<ScrollToTop>
					<TopNav
						checkLogin={islogin}
						cartUpdate={cartUpdate}
						setCartUpdate={setCartUpdate}
					/>
					{/* <MultiLevelBreadcrumb /> */}

					<Switch>
						<Route exact path="/farmeruserdashboard">
							{farmeruser ? <FarmerUserDashboard /> : <FarmerLogin />}
						</Route>
						<Route exact path="/farmerlogin">
							{farmeruser ? <Blog /> : <FarmerLogin />}
						</Route>
						<Route exact path="/farmerregister">
							{farmeruser ? <Home /> : <FarmerRegister />}
						</Route>
						<Route exact path="/writepage">
							<WritePage />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route exact path="/post/:postId">
							<SinglePage />
						</Route>
						
						<Route exact path="/edit/:editId">
							<EditPage />
						</Route>
						<Route path="/cart">
							<Cart cart={cart} setCartUpdate={setCartUpdate} isLogin={islogin} />
						</Route>
						<Route path="/subpay">
							<SubPay />
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
						<Route path="/changepassword">
							<ChangePassword 
								checkLogin={islogin}
							/>
						</Route>
						<Route path="/memberlogin">
							<MemberLogin
								setData={setData}
								data={data}
								setShowdata={setShowdata}
							/>
						</Route>
						<Route path="/memberegister">
							<MemberRegister register={register} setRegister={setRegister} />
						</Route>
						<Route path="/farmerlist">
							<FarmList />
						</Route>
						<Route path="/fruitmap">
							<FruitMapMain />
						</Route>
						<Route path="/MainProduct/:id?">
							<MainProduct setCartUpdate={setCartUpdate} />
						</Route>
						<Route path="/Main">
							<Main />
						</Route>
						<Route path="/customized">
							<Customized
								setTotalCart={setCart}
								setCartUpdate={setCartUpdate}
							/>
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