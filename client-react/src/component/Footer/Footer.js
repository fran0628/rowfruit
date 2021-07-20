import { useEffect } from 'react'; 
import './footer.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Accordion,ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'


function Footer() {
	const position = [25.02902278150167, 121.5623255241942];

    return (
			<>
				<footer className="container-fluid ">
					<div className="row d-flex">
						<div className="col-lg-3">
							<MapContainer
								center={position}
								zoom={13}
								scrollWheelZoom={false}
								id="map"
								className="p-0 ms-3"
							>
								<TileLayer
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={position}>
									<Popup>
										RowFruit
										<br />
										Ruffle your Life.
									</Popup>
								</Marker>
							</MapContainer>
						</div>
						<div className="col-lg-6 mt-4">
							<div className="row d-none d-lg-flex">
								<div className="col">
									<dl className="h5 ms-3">
										<dt className="h5 border-bottom mb-3 pb-2">主打水果盒</dt>
										<dd>
											<Link to="/MainProduc">美白水果盒</Link>
										</dd>
										<dd>
											<Link>健身水果盒</Link>
										</dd>
										<dd>
											<Link>多纖輕盈水果盒</Link>
										</dd>
									</dl>
									<dl className="h5 ms-3 mt-5">
										<dt className="h5 border-bottom mt-4 mb-3 pb-2">
											客製水果盒
										</dt>
										<dd>
											<Link>客製水果盒</Link>
										</dd>
									</dl>
								</div>
								<div className="col">
									<dl className="h5 ms-3">
										<dt className="h5 border-bottom mb-3 pb-2">水果地圖</dt>
										<dd>
											<Link>水果總覽</Link>
										</dd>
										<dd>
											<Link>水果分類</Link>
										</dd>
										<dd>
											<Link>地區分布</Link>
										</dd>
									</dl>
								</div>
								<div className="col">
									<dl className="h5 ms-3">
										<dt className="h5 border-bottom mb-3 pb-2">小農部落</dt>
										<dd>
											<Link>小農總覽</Link>
										</dd>
										<dd>
											<Link>文章總覽</Link>
										</dd>
									</dl>
									<dl className="h5 ms-3 mt-5">
										<dt className="h5 border-bottom mt-4 mb-3 pb-2">
											關於我們
										</dt>
										<dd>
											<Link>關於我們</Link>
										</dd>
									</dl>
								</div>
							</div>
							<Accordion className="d-lg-none border-0 mx-4">
								<Accordion.Item eventKey="0">
									<Accordion.Header>主打水果盒</Accordion.Header>
									<Accordion.Body>
										<ListGroup variant="flush">
											<ListGroup.Item action>美白水果盒</ListGroup.Item>
											<ListGroup.Item action>健身水果盒</ListGroup.Item>
											<ListGroup.Item action>多纖輕盈水果盒</ListGroup.Item>
										</ListGroup>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>客製水果盒</Accordion.Header>
									<Accordion.Body>
										<ListGroup variant="flush">
											<ListGroup.Item action>客製水果盒</ListGroup.Item>
										</ListGroup>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>水果地圖</Accordion.Header>
									<Accordion.Body>
										<ListGroup variant="flush">
											<ListGroup.Item action>水果總覽</ListGroup.Item>
											<ListGroup.Item action>水果分布</ListGroup.Item>
											<ListGroup.Item action>地區分布</ListGroup.Item>
										</ListGroup>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>小農部落</Accordion.Header>
									<Accordion.Body>
										<ListGroup variant="flush">
											<ListGroup.Item action>水果總覽</ListGroup.Item>
											<ListGroup.Item action>文章總覽</ListGroup.Item>
										</ListGroup>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>關於我們</Accordion.Header>
									<Accordion.Body>
										<ListGroup variant="flush">
											<ListGroup.Item action>關於我們</ListGroup.Item>
											
										</ListGroup>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-3 order-first order-lg-last">
							<div class="info mx-3 ">
								<h5 class="text-center mb-3 mt-3">ROWFRUIT</h5>
								<dl className="ms-5">
									<dt>
										<i class="fas fa-map-marker-alt fa-lg"></i>
										<span class="m-2">地址 :</span>
									</dt>
									<dd className="mt-2">台北市信義區吳興街177號</dd>
								</dl>
								<dl className="ms-5">
									<dt>
										<i class="fas fa-map-marker-alt fa-lg"></i>
										<span class="m-2">信箱 :</span>
									</dt>
									<dd className="mt-2">rowfruit@test.com</dd>
								</dl>
								<dl className="ms-5">
									<dt>
										<i class="fas fa-map-marker-alt fa-lg"></i>
										<span class="m-2">電話 :</span>
									</dt>
									<dd className="mt-2">0931-000-000</dd>
								</dl>
							</div>

							<div class="icon mt-3 text-center">
								<a href="">
									<i class="fab fa-facebook-square fa-2x me-4"></i>
								</a>
								<a href="">
									<i class="fab fa-instagram fa-2x me-4"></i>
								</a>
								<a href="">
									<i class="fab fa-line fa-2x me-4"></i>
								</a>
								<a href="">
									<i class="fab fa-youtube fa-2x"></i>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
}

export default Footer;