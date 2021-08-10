import React, { useState, useEffect } from 'react'
import { apiMainProduct, apiMain } from '../../../config/API'
import "./MainProductDetail.scss"
import MainContent from './MainContent/MainContent'
import Aside from './Aside/Aside'
import Buy from './BuyContent/Buy'
import Images from './ProductImages/Images'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadcrumb from "../../../component/BreadCrumb/MultiLevelBreadcrumb";
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";


function MainProduct(props) {

const{setCartUpdate}=props;

const [data, setData] = useState({
  id: 0,
  fruit_item:"",
  product_images:"",
  items:[]
});
const [asidedata, setAsidedata] = useState([]); 

useEffect(() => {
  (async function productdetailData() {
    const res = await fetch(apiMainProduct)
    const apidata  = await res.json()
    const productId = +props.match.params.id
    const product = apidata.find((v, i) => {
    return v.id === productId
    })

    if (product) setData (product)
    })();
  }, [props.match.params.id]); 

console.log(data)
useEffect(() => {
  (async function productsData() {
    const res = await fetch(apiMain)
    const apidata  = await res.json()
    const productId = +props.match.params.id
    const asideproduct = apidata.filter((v, i) => {
      return v.id !== productId && v.id < 10
    })

    if (asideproduct) setAsidedata (asideproduct)
    })();
}, [props.match.params.id]);
// console.log(asidedata)

return (
	<>
		<MultiLevelBreadcrumb />
		<main>
			{/*產品導覽＋產品圖＋產品購物文*/}
			<div className="container">
				<div className="container-lg row m-0">
					{/*產品導覽＋產品圖*/}
					<Images images={data.product_images} />
					{/*產品購物文*/}
					<Buy
						id={data.id}
						product_name={data.product_name}
						fruit_item={data.fruit_item}
						price={data.price}
						images={data.images}
						setCartUpdate={setCartUpdate}
					/>
					{/*側欄推薦其它產品*/}
					<Aside asidedata={asidedata} />
				</div>
			</div>
			{/*產品水果內容介紹*/}
			<MainContent datacontent={data.items} />
			{/*訂閱方案*/}
			<div className="container">
				<div className="row">
					<div className="photopicture col-xxl-2">
						<div className="photopic">
							<img src="/Mainphotos/34.png" alt="" />
						</div>
					</div>
					{/*訂閱方案好處*/}
					<div className="warpper col-lg-4 col-xxl-4 mt-4">
						<h2 className="m-0">訂閱方案</h2>
						<ul className="ms-2">
							<li className="mb-4">
								<i className="far fa-check-circle fa-2x"></i>
								<h5 className="h4 m-2" style={{ display: "inline" }}>
									一鍵購買就能在家享受
								</h5>
							</li>
							<li className="mb-4">
								<i className="far fa-check-circle fa-2x"></i>
								<h5 className="h4 m-2" style={{ display: "inline" }}>
									每週提供6種水果
								</h5>
							</li>
							<li className="mb-4">
								<i className="far fa-check-circle fa-2x"></i>
								<h5 className="h4 m-2" style={{ display: "inline" }}>
									嚴選在地水果
								</h5>
							</li>
							<li className="mb-4">
								<i className="far fa-check-circle fa-2x"></i>
								<h5 className="h4 m-2" style={{ display: "inline" }}>
									通過有機認證
								</h5>
							</li>
						</ul>
					</div>
					{/*訂閱方案專欄*/}
					<div className="warpper col-xxl-6 col-lg-8">
						<input
							className="radio"
							id="one"
							name="group"
							type="radio"
							checked
						/>
						<input className="radio" id="two" name="group" type="radio" />
						<input className="radio" id="three" name="group" type="radio" />
						<input className="radio" id="four" name="group" type="radio" />
						<div className="tabs">
							<label className="tab" id="one-tab" htmlFor="one">
								體驗一箱
							</label>
							<label className="tab" id="two-tab" htmlFor="two">
								月訂閱制方案
							</label>
							<label className="tab" id="three-tab" htmlFor="three">
								季訂閱制方案
							</label>
							<label className="tab" id="four-tab" htmlFor="four">
								半年訂閱制方案
							</label>
						</div>
						<div className="panels">
							<div className="panel" id="one-panel">
								<div className="d-flex">
									<img src="/Mainphotos/31.png" alt="" />
									<ul className="m-5 text-center">
										<li class="mt-5">{data.product_name}水果盒</li>
										<li >享受一次水果配送服務</li>
										<li>約 1 - 2 周時間寄出</li>
									</ul>
								</div>
							</div>
							<div className="panel" id="two-panel">
								<div className="d-flex">
									<img src="/Mainphotos/32.png" alt="" />
									<ul className="m-5 text-center">
										<li class="mt-5">{data.product_name}水果盒</li>
										<li>享受４週水果配送服務</li>
										<li>週一至週四間配送</li>
										<Link to="/subscribecart"><button className="smallsub-btnbuy">選擇訂閱方案</button></Link>
									</ul>
								</div>
							</div>
							<div className="panel" id="three-panel">
								<div className="d-flex">
									<img src="/Mainphotos/32.png" alt="" />
									<ul className="m-5 text-center">
										<li class="mt-5">{data.product_name}水果盒</li>
										<li>享受１２週水果配送服務</li>
										<li>週一至週四間配送</li>
										<Link to="/subscribecart"><button className="smallsub-btnbuy">選擇訂閱方案</button></Link>
									</ul>
								</div>
							</div>
							<div className="panel" id="four-panel">
								<div className="d-flex">
									<img src="/Mainphotos/32.png" alt="" />
									<ul className="m-5 text-center">
									<li class="mt-5">{data.product_name}水果盒</li>
										<li>享受半年水果配送服務</li>
										<li>週一至週四間配送</li>
										<Link to="/subscribecart"><button className="smallsub-btnbuy">選擇訂閱方案</button></Link>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*RWD訂閱方案*/}
			<div className="container d-flex justify-content-center my-4">
				<div className="box justify-content-center">
					<div className="item">
						<a className="d-block text-center active p-3" href="#/">
							體驗一箱
						</a>
						<div className="content active d-flex justify-content-center">
							<ul className="menu-item-content p-0">
								<li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
								<li className="p-1 text-center">珍珠芭樂約2-3份</li>
								<li className="p-1 text-center">秀女番茄7-8顆裝</li>
								<li className="p-1 text-center">綠色奇異果約2-3顆</li>
							</ul>
						</div>
					</div>
					<div className="item">
						<a className="d-block text-center p-3" href="#/">
							月訂閱制方案
						</a>
						<div className="content d-flex justify-content-center">
							<ul className="menu-item-content p-0">
								<li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
								<li className="p-1 text-center">珍珠芭樂約2-3份</li>
								<li className="p-1 text-center">秀女番茄7-8顆裝</li>
								<li className="p-1 text-center">綠色奇異果約2-3顆</li>
							</ul>
						</div>
					</div>
					<div className="item ">
						<a className="d-block text-center p-3" href="#/">
							季訂閱制方案
						</a>
						<div className="content d-flex justify-content-center">
							<ul className="menu-item-content p-0">
								<li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
								<li className="p-1 text-center">珍珠芭樂約2-3份</li>
								<li className="p-1 text-center">秀女番茄7-8顆裝</li>
								<li className="p-1 text-center">綠色奇異果約2-3顆</li>
							</ul>
						</div>
					</div>
					<div className="item">
						<a className="d-block text-center p-3" href="#/">
							半年訂閱制方案
						</a>
						<div className="content d-flex justify-content-center">
							<ul className="menu-item-content p-0">
								<li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
								<li className="p-1 text-center">珍珠芭樂約2-3份</li>
								<li className="p-1 text-center">秀女番茄7-8顆裝</li>
								<li className="p-1 text-center">綠色奇異果約2-3顆</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/*評價*/}
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-5">
						<div className="phoneasidepic">
							<img src="/Mainphotos/33.png" alt="" />
						</div>
					</div>
					<div className="col-lg-5">
						<div className="cellphone">
							<div className="cellphonetop"></div>
							<div className="cellphonescreen">
								<div className="m-4">
									<h2 style={{ display: "inline" }}>評價</h2>
									<h5 style={{ display: "inline" }}>(21則評論)</h5>
									{/* <button id="screenbtn" className="phonescreen-btn">
										我要留言
									</button> */}
									<hr />
									{/*評價-1*/}
									<div className="mb-4 screen-evaluation">
										<div className="d-flex">
											<img src="/Mainphotos/avatar1.png" alt="" />
											<div className="d-flex flex-column">
												<span className="ms-3">隔壁阿明</span>
												<div className="d-flex ms-2">
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
												</div>
											</div>
										</div>
										<div style={{ marginLeft: "95px" }}>
											<span>呷咧北賣喔 給你五顆讚拉</span>
										</div>
									</div>
									{/*評價-2*/}
									<div className="mb-4 screen-evaluation">
										<div className="d-flex">
											<img src="/Mainphotos/avatar2.png" alt="" />
											<div className="d-flex flex-column">
												<span className="ms-3">我是小美</span>
												<div className="d-flex ms-2">
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="far fa-star fa-lg"></i>
												</div>
											</div>
										</div>
										<div style={{ marginLeft: "95px" }}>
											<span>很可以喔厚呷</span>
										</div>
									</div>
									{/*評價-3*/}
									<div className="mb-4 screen-evaluation">
										<div className="d-flex">
											<img src="/Mainphotos/avatar3.png" alt="" />
											<div className="d-flex flex-column">
												<span className="ms-3">春日部妮妮</span>
												<div className="d-flex ms-2">
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
												</div>
											</div>
										</div>
										<div style={{ marginLeft: "95px" }}>
											<span>最喜歡你們家水果了</span>
										</div>
									</div>
									{/*評價-4*/}
									<div className="mb-4 screen-evaluation">
										<div className="d-flex">
											<img src="/Mainphotos/avatar4.png" alt="" />
											<div className="d-flex flex-column">
												<span className="ms-3">上班族阿Ken</span>
												<div className="d-flex ms-2">
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
												</div>
											</div>
										</div>
										<div style={{ marginLeft: "95px" }}>
											<span>優秀喔上班族訂起來</span>
										</div>
									</div>
									{/*評價-5*/}
									<div className="mb-4 screen-evaluation">
										<div className="d-flex">
											<img src="/Mainphotos/avatar1.png" alt="" />
											<div className="d-flex flex-column">
												<span className="ms-3">中部王陽明</span>
												<div className="d-flex ms-2">
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="fas fa-star fa-lg"></i>
													<i className="far fa-star fa-lg"></i>
												</div>
											</div>
										</div>
										<div style={{ marginLeft: "95px" }}>
											<span>水果甜甜的真美味</span>
										</div>
									</div>
								</div>
							</div>
							<div className="phone-btn"></div>
							<ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>}/>
						</div>
					</div>
					<div className="top col-2">
						{/* <button onclick={ScrollToTop}>
							<i className="fas fa-angle-up fa-3x"></i>
						</button> */}
						
					</div>
				</div>
			</div>
			{/*RWD評價*/}
			<div className="rwdphone m-4">
				<h5 style={{ display: "inline" }}>(21則評論)</h5>
				<button id="screenbtn" className="screen-btn">
					我要留言
				</button>
				<hr />
				{/*RWD評價-1*/}
				<div className="mb-4 evaluation">
					<div className="d-flex">
						<img src="/photo/avatar1.png" alt="" />
						<div className="d-flex flex-column">
							<span className="ms-3">隔壁阿明</span>
							<div className="d-flex ms-2">
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "95px" }}>
						<span>呷咧北賣喔 給你五顆讚拉</span>
					</div>
				</div>
				{/*RWD評價-2*/}
				<div className="mb-4 evaluation">
					<div className="d-flex">
						<img src="/photo/avatar2.png" alt="" />
						<div className="d-flex flex-column">
							<span className="ms-3">我是小美</span>
							<div className="d-flex ms-2">
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="far fa-star fa-lg"></i>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "95px" }}>
						<span>很可以喔厚呷</span>
					</div>
				</div>
				{/*RWD評價-3*/}
				<div className="mb-4 evaluation">
					<div className="d-flex">
						<img src="/photo/avatar3.png" alt="" />
						<div className="d-flex flex-column">
							<span className="ms-3">春日部妮妮</span>
							<div className="d-flex ms-2">
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "95px" }}>
						<span>最喜歡你們家水果了</span>
					</div>
				</div>
				{/*RWD評價-4*/}
				<div className="mb-4 evaluation">
					<div className="d-flex">
						<img src="/photo/avatar4.png" alt="" />
						<div className="d-flex flex-column">
							<span className="ms-3">上班族阿Ken</span>
							<div className="d-flex ms-2">
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "95px" }}>
						<span>優秀喔上班族訂起來</span>
					</div>
				</div>
				{/*RWD評價-5*/}
				<div className="mb-4 evaluation">
					<div className="d-flex">
						<img src="/photo/avatar1.png" alt="" />
						<div className="d-flex flex-column">
							<span className="ms-3">中部王陽明</span>
							<div className="d-flex ms-2">
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="fas fa-star fa-lg"></i>
								<i className="far fa-star fa-lg"></i>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "95px" }}>
						<span>水果甜甜的真美味</span>
					</div>
				</div>
			</div>
		</main>
	</>
);
}

export default withRouter(MainProduct);