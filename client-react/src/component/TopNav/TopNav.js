import { useState,useEffect } from 'react';
import './topnav.css' 
import {
	Container,
	Navbar,
	NavDropdown,
	Nav,
	Button,
	Offcanvas,
	ListGroup,
} from "react-bootstrap";
import logoImg from './logo.png'
import { LinkContainer } from "react-router-bootstrap";
// import { useContext } from "react";
// import { Context } from "../../context/Context";

function logout(){
	localStorage.clear();
	window.location.href = 'memberlogin'
}

 function TopNav(props) {
	 	// const { user, dispatch } = useContext(Context);

		// const handleLogout = () => {
		// 	dispatch({ type: "LOGOUT" });
		// };
	 const{auth,cartUpdate,setCartUpdate,checkLogin}=props
	 const [cartLength,setCartLength]=useState()
   const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	
		
	console.log(checkLogin);
	useEffect(()=>{
		const cart = localStorage.getItem('cart')||'[]'
		setCartLength(JSON.parse(cart).length)
		setCartUpdate(false)
	},[cartLength,cartUpdate])
    
    
    return (
			<>
				<Navbar className="myNavbar"></Navbar>
				<Navbar fixed="top" className="myNavbar">
					<Container expand="lg">
						<LinkContainer to="/">
							<Navbar.Brand>
								<img src={logoImg} alt="" width="190" height="80" />
							</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse
							id="basic-navbar-nav"
							className="justify-content-end"
						>
							<Nav className="justify-content-end lgnav">
								<NavDropdown title="主打水果盒" id="basic-nav-dropdown">
									<LinkContainer to="/Main">
										<NavDropdown.Item>主打水果盒選單</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Divider />
									<LinkContainer to="/MainProduct/1">
										<NavDropdown.Item>美白水果盒</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/MainProduct/2">
										<NavDropdown.Item>健身水果盒</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/MainProduct/3">
										<NavDropdown.Item>輕盈水果盒</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>

								<LinkContainer to="/customized">
									<Nav.Link>客製水果盒</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/fruitmap">
									<Nav.Link>水果地圖</Nav.Link>
								</LinkContainer>
								<NavDropdown title="小農部落" id="basic-nav-dropdown">
									<LinkContainer to="/farmerlist">
										<NavDropdown.Item>小農總覽</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/blog">
										<NavDropdown.Item>文章總覽</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
								<LinkContainer to="/about">
									<Nav.Link>關於我們</Nav.Link>
								</LinkContainer>
								{checkLogin.islogin ? 
									<NavDropdown title="會員中心" id="basic-nav-dropdown">
									<LinkContainer to="/memberdashboard">
										<NavDropdown.Item>修改會員資料</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/orderlist">
										<NavDropdown.Item>訂單資訊</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
										 :
										 "" }
								<LinkContainer to="cart">
										<Nav.Link>
										<div className="position-relative">
										{cartLength>0 && <div className="text-warning d-flex align-items-center justify-content-center position-absolute">{cartLength}</div>}
											
											<i class="fas fa-shopping-cart fa-lg nav-icon" />
										</div>
									</Nav.Link>
								</LinkContainer>
								{checkLogin.islogin ? 
										 <div>
											<sapn> hi {checkLogin.name}</sapn> <button className="btn btn-success" onClick={logout}>登出</button>
										 </div>  :
										 <a className="nav-link" href="/memberlogin"> <i class="fas fa-user fa-lg nav-icon" /> </a>}
								{/* <LinkContainer >
									<Nav.Link>
									
									</Nav.Link>
								</LinkContainer> */}
							</Nav>
						</Navbar.Collapse>
						<Button
							onClick={handleShow}
							variant="link"
							className="offcanvasbtn"
						>
							<i class="fas fa-bars fa-2x"></i>
						</Button>

						<Offcanvas show={show} onHide={handleClose} placement="end">
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>
									<div class="d-flex mt-3">
										<LinkContainer to="/memberlogin">
											<Nav.Link className="nav-icon ">
												<i class="fas fa-user fa-lg nav-icon" />
											</Nav.Link>
										</LinkContainer>
										<LinkContainer to="cart">
											<Nav.Link className="nav-icon">
												<i class="fas fa-shopping-cart fa-lg nav-icon" />
											</Nav.Link>
										</LinkContainer>
									</div>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<ListGroup variant="flush">
									<ListGroup.Item action className="p-3">
										首頁
									</ListGroup.Item>
									<ListGroup.Item action className="p-3">
										主打水果盒
									</ListGroup.Item>
									<ListGroup.Item action className="p-3">
										客製水果盒
									</ListGroup.Item>
									<ListGroup.Item action className="p-3">
										水果地圖
									</ListGroup.Item>
									<ListGroup.Item action className="p-3">
										小農部落
									</ListGroup.Item>
									<ListGroup.Item action className="p-3">
										關於我們
									</ListGroup.Item>
								</ListGroup>
							</Offcanvas.Body>
						</Offcanvas>
					</Container>
				</Navbar>
			</>
		);
}
export default TopNav;