import { useState } from 'react';
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




 function TopNav() {
   const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
    
    
    return (
			<>
				<Navbar className="myNavbar"></Navbar>
				<Navbar fixed="top" className="myNavbar">
					<Container expand="lg">
						<Navbar.Brand href="/">
							<img src={logoImg} alt="" width="190" height="80" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse
							id="basic-navbar-nav"
							className="justify-content-end"
						>
							<Nav className="justify-content-end lgnav">
								<NavDropdown title="主打水果盒" id="basic-nav-dropdown">
									<NavDropdown.Item href="/Main">
										主打水果盒選單
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/MainProduct">
										美白水果盒
									</NavDropdown.Item>

									<NavDropdown.Item href="/MainProduct">
										健身水果盒
									</NavDropdown.Item>

									<NavDropdown.Item href="/MainProduct">
										輕盈水果盒
									</NavDropdown.Item>
								</NavDropdown>

								<Nav.Link href="#">客製水果盒</Nav.Link>
								<Nav.Link href="#">水果地圖</Nav.Link>
								<NavDropdown title="小農部落" id="basic-nav-dropdown">
									<NavDropdown.Item href="/farmerlist">
										小農總覽
									</NavDropdown.Item>

									<NavDropdown.Item href="#action/3.2">
										文章總覽
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#">關於我們</Nav.Link>
								<Nav.Link href="#">
									<i class="fas fa-user fa-lg nav-icon" />
								</Nav.Link>
								<Nav.Link href="#">
									<i class="fas fa-shopping-cart fa-lg nav-icon" />
								</Nav.Link>
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
										<Nav.Link href="#" className="nav-icon">
											<i class="fas fa-user fa-lg nav-icon" />
										</Nav.Link>
										<Nav.Link href="#" className="nav-icon">
											<i class="fas fa-shopping-cart fa-lg nav-icon" />
										</Nav.Link>
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
										客製水果和
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