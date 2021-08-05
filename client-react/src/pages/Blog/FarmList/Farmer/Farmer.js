import React from 'react'
import './Framer.css'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function defaultImgSrc(str) {
	if (str === null || str === "") {
		return "null.png";
	}
	return str;
}

function Farmer(props) {
	 const {farmer}=props
	 const PF = "http://localhost:5000/images/";
    return (
			<>
				{/* <Rate disabled defaultValue={farmer.rating} /> */}
				<div className="col-lg-4 col-md-6 bg-change">
					<div className="p-4 mx-auto k-profile me-3 d-flex flex-column jusitify-content-between align-items-stretch">
						<div className="farm-top">
							<div className="farm d-flex justify-content-between align-items-center">
								<div className="farm-name position-relative">
									<h4 className="m-offset">{farmer.fram_name}</h4>
									<div className="rating">
										<ReactStars size={20} edit={false} value={farmer.rating} />
									</div>
								</div>
								<div className="avatar">
									<img
										className="object-fit"
										src={PF + defaultImgSrc(farmer.avatar)}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="farm-content mt-1">
							<p>{farmer.content}</p>
						</div>
						<div className="farm-connect">
							<p>聯絡我</p>
							<div className="">
								<Link>
									<i className="fas fa-envelope  connect-icon"></i>
								</Link>
								<Link>
									<i className="fab fa-line connect-icon"></i>
								</Link>
								<Link>
									<i className="fas fa-phone-alt connect-icon"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}
export default Farmer