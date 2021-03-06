import { useState, useEffect, useContext } from "react";
import "./topnav.css";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Offcanvas,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import logoImg from "./logo.png";
import { LinkContainer } from "react-router-bootstrap";
// import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { withRouter } from "react-router";

function TopNav(props) {
  function catchImgSrc(str) {
    if (str === null || str === "undefined") {
			return "null.png";
		}
    return str;
  }
  function defaultImgSrc(str) {
    if (str === null || str === "") {
      return "apple.png";
    }
    return str;
  }
  const { farmeruser, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [avatar, setAvatar] = useState("");
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  function logout() {
    localStorage.clear();
    window.location.href = "memberlogin";
  }
  const { cartUpdate, setCartUpdate, checkLogin } = props;
  const [cartLength, setCartLength] = useState();
  const [cartData, setCartData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(checkLogin.islogin);

  useEffect(() => {
    const cart = localStorage.getItem("cart") || "[]";
    setCartLength(JSON.parse(cart).length);
    setCartUpdate(false);
    setCartData(JSON.parse(cart));
  }, [cartLength, cartUpdate]);

  function getuserDetail() {
    const token = localStorage.getItem("token").split(" ")[1];

    let payload = JSON.parse(atob(token.split(".")[1]));
    axios
      .get("http://localhost:5000/api/member/" + payload.id)

      .then((res) => {
        // console.log(res.data[0].avatar);
        setAvatar(res.data[0].avatar);
      });
  }

  if (checkLogin.islogin) {
    getuserDetail();
  }

  return (
		<>
			<Navbar className="myNavbar"></Navbar>
			<Navbar fixed="top" className="myNavbar shadow-sm">
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
							<NavDropdown title="???????????????" id="basic-nav-dropdown">
								<LinkContainer to="/Main">
									<NavDropdown.Item>?????????????????????</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/subscribecart">
									<NavDropdown.Item>???????????????</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Divider />
								<LinkContainer to="/MainProduct/1">
									<NavDropdown.Item>???????????????</NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to="/MainProduct/2">
									<NavDropdown.Item>???????????????</NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to="/MainProduct/3">
									<NavDropdown.Item>???????????????</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>

							<LinkContainer to="/customized">
								<Nav.Link>???????????????</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/fruitmap">
								<Nav.Link>????????????</Nav.Link>
							</LinkContainer>
							<NavDropdown title="????????????" id="basic-nav-dropdown">
								<LinkContainer to="/farmerlist">
									<NavDropdown.Item>????????????</NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to="/blog">
									<NavDropdown.Item>????????????</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/about">
								<Nav.Link>????????????</Nav.Link>
							</LinkContainer>
							{checkLogin.islogin ? (
								<NavDropdown
									title={
										<img
											className="memberIcon"
											src={PF + defaultImgSrc(avatar)}
											alt=""
										/>
									}
									id="basic-nav-dropdown"
								>
									<LinkContainer to="/memberdashboard">
										<NavDropdown.Item>??????????????????</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/changepassword">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/orderlist">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Divider />

									<NavDropdown.Item onClick={logout}>??????</NavDropdown.Item>
								</NavDropdown>
							) : farmeruser ? (
								<NavDropdown
									// title="hi???????????????"
									title={
										<img
											className="farmerIcon"
											src={PF + catchImgSrc(farmeruser.avatar)}
											alt=""
										/>
									}
									id="basic-nav-dropdown"
								>
									<LinkContainer to="/farmeruserdashboard">
										<NavDropdown.Item>??????????????????</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/writepage">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/postlist">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Divider />
									<NavDropdown.Item onClick={handleLogout}>
										??????
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<NavDropdown
									title={<i class="fas fa-user fa-lg nav-icon" />}
									id="basic-nav-dropdown"
								>
									<LinkContainer to="/memberlogin">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/memberegister">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}

							{/* {checkLogin.islogin ? 
									<NavDropdown title="????????????" id="basic-nav-dropdown">
									<LinkContainer to="/memberdashboard">
										<NavDropdown.Item>??????????????????</NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/orderlist">
										<NavDropdown.Item>????????????</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
										 :
										 "" } */}
							<LinkContainer to="/cart">
								<OverlayTrigger
									key="bottom"
									placement="bottom"
									overlay={
										<Tooltip id="tooltip-bottom">
											{cartData.map((item, index) => {
												const { productName, imageUrl, count } = item;
												return (
													<div className="row p-1">
														<div className="col-5">
															<img className="imageFit" src={imageUrl} alt="" />
														</div>
														<div className="col-4 d-flex justify-content-center align-items-center">
															{productName}
														</div>
														<div className="col-3 d-flex justify-content-center align-items-center">
															{count}
														</div>
													</div>
												);
											})}
										</Tooltip>
									}
								>
									<Nav.Link>
										<div
											onClick={() => {
												props.history.push("/cart");
											}}
											className="position-relative"
										>
											{cartLength > 0 && (
												<div className="text-warning d-flex align-items-center justify-content-center position-absolute">
													{cartLength}
												</div>
											)}
											<i class="fas fa-shopping-cart fa-lg nav-icon" />
										</div>
									</Nav.Link>
								</OverlayTrigger>
							</LinkContainer>
							{/* {checkLogin.islogin ? 
										 <div>
											<sapn> hi {checkLogin.name}</sapn> <button className="btn btn-success" onClick={logout}>??????</button>
										 </div>  :
										 <a className="nav-link" href="/memberlogin"> <i class="fas fa-user fa-lg nav-icon" /> </a>} */}
							{/* <LinkContainer >
									<Nav.Link>
									
									</Nav.Link>
								</LinkContainer> */}
						</Nav>
					</Navbar.Collapse>
					<Button onClick={handleShow} variant="link" className="offcanvasbtn">
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
									??????
								</ListGroup.Item>
								<ListGroup.Item action className="p-3">
									???????????????
								</ListGroup.Item>
								<ListGroup.Item action className="p-3">
									???????????????
								</ListGroup.Item>
								<ListGroup.Item action className="p-3">
									????????????
								</ListGroup.Item>
								<ListGroup.Item action className="p-3">
									????????????
								</ListGroup.Item>
								<ListGroup.Item action className="p-3">
									????????????
								</ListGroup.Item>
							</ListGroup>
						</Offcanvas.Body>
					</Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}
export default withRouter(TopNav);
