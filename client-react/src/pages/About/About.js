import React, { useState } from "react";
import "./About.scss";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function About() {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [desc, setDesc] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault();
		const sentEmail = {
      name:name,
      desc:desc,
      email:email,
		};
    // console.log(sentEmail)
    await axios.post("/Mail", sentEmail);
    

  }
  
  return (
		<>
			{/*banner*/}
			<section className="banner no-repeat">
				<div className="text-right container">
					<div className="row justify-content-end">
						<div className="col-12 col-lg-4">
							<h1 className="text-end text-dark ">
								<strong>
									<strong>ROWFRUIT</strong>
								</strong>
							</h1>

							<p className="text-end h5 font-weight-bold text-dark lh-base">
								從驚喜出發&nbsp;
								<br />
								滿足日常營養所需&nbsp;
								<br />
								從驚喜出發&nbsp;
								<br />
								成為小農的協作平台
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*品牌故事*/}
			<section>
				<div className="container">
					<h1 className=" text-center text-dark">
						<strong>品牌故事</strong>
					</h1>
					<div className="row">
						<div className="col col-md-4 ">
							<img src="/About/farmer.png" alt="ROWFRUIT" />
						</div>
						<div className="col text-end">
							<h3 className=" font-weight-light mb-5 ">
								您的水果專家已上線
								<br />
								嚴選水果幫您搭配好配送一周所需免煩惱
							</h3>

							<p className="h5 mt-4 pt-4 lh-base">
								&nbsp;一群年輕人
								<br />
								因為偶然之下遇見當地小農
								<br />
								才得知小農的銷售通路的辛酸
								<br />
								所以決定跟小農攜手打造這個網站&nbsp;
								<br />
								<br />
								有別於現代人對於水果的品質要求日益提升
								<br />
								加上現代人忙碌的工作型態營養攝取不平衡
								<br />
								我們提供的水果盒已經嚴格篩選最優質水果
								<br />
								最輕鬆的水果搭配以及最完美的營養所需
								<br />
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*合作小農*/}
			<div className="container-fluid">
				<h1 className="text-center text-dark">
					<strong>合作小農</strong>
				</h1>

				<Carousel variant="dark">
					<Carousel.Item>
						<div className="d-flex justify-content-center">
							<img
								className="d-block w-75 "
								src="/About/mapn.png"
								alt="First slide"
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="d-flex justify-content-center">
							<img
								className="d-block w-75"
								src="/About/mapm.png"
								alt="Second slide"
							/>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="d-flex justify-content-center">
							<img
								className="d-block w-75"
								src="/About/maps.png"
								alt="Third slide"
							/>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
			{/*聯絡我們*/}
			<section>
				<div className="container-fluid">
					<div>
						<h1 className="text-center text-dark">
							<strong>聯絡我們</strong>
						</h1>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-12">
							<div className="image-wrapper">
								<img
									className="w-100"
									src="/About/MEMBERBAN.png"
									alt="ROWFRUIT"
								/>
							</div>
						</div>
						<div className="col-lg-3 offset-lg-1" data-form-type="formoid">
							<div className="dragArea row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<p className="mb-2 display-7">
										請填寫表格資料，我們會盡快回復您
									</p>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="col-12 col-sm-12 form-group " data-for="name">
										<input
											className="form-control"
											type="text"
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="姓名"
										/>
									</div>
									<div className="col-12 form-group mt-2" data-for="email">
										<input
											className="form-control"
											type="email"
											placeholder="電子信箱"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div class="mb-3">
										<label
											for="exampleFormControlTextarea1"
											className="form-label"
										></label>
										<textarea
											className="form-control"
											type="content"
											name="content"
											value={desc}
											onChange={(e) => setDesc(e.target.value)}
											placeholder="留言"
											rows="3"
										></textarea>
									</div>

									<div className="col-lg-12 col-md-12 col-sm-12 align-center ">
										<button type="submit" className="btn btn-success">
											提交
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="offset-lg-1"></div>
					</div>
				</div>
			</section>
		</>
	);
}


