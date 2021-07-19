import React, { useState, useEffect } from "react";
import HotPost from './HotPost/HotPost'
import './blogpage.css'
import axios from "axios";
import PostBlock from "./PostBlock/PostBlock";


 function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [hotArticle,setHotArticle]=useState([])
		// const serverUrl = "http://localhost:5000/api"
		useEffect(() => {
			const fetchPosts = async () => {
				const res = await axios.get("/posts");
				// console.log(res);
				
				console.log(res.data)
				setPosts(res.data);
                setHotArticle(res.data.slice(0, 5));
                
			};
            
			fetchPosts();
		}, []);
    

    return (
			<>
				
				<div className="container mt-2">
					<div className="section-hero row">
						<div
							className="
						col-12 col-lg-8
						main-article
						d-flex
						flex-column
						justify-content-between
					"
						>
							<div className="catagory mt-4 ms-3">
								<span className="catagory-block live">L</span>
								<span className="catagory-content">生活</span>
							</div>
							<div className="article-title mb-5 ms-3 mt-5 position-relative">
								<h1 className="text-white mb-3">
									破解迷思：水果到底該飯前吃，還是飯後吃？
								</h1>
								<p className="text-white mb-3">
									- 作者 Irene ·2021-05-11 17:46:17
								</p>
								<p className="text-white">
									究竟什麼時候吃水果最適合？在台灣有個深植人心的說法：水果要飯前吃，不能飯後吃，
									甚至有人宣稱飯後馬上吃水果如同慢性自殺的吃法，你相信這種說法嗎？
									...
								</p>
							</div>
						</div>
						<div
							className="
						col-12 col-lg-4
						hit-article
						d-flex
						flex-column
						justify-content-between
					"
						>
							{hotArticle.map((p, i) => {
								return <HotPost post={p} key={i} />;
							})}
						</div>
					</div>
				</div>

				<div className="container mt-5">
					<div className="row">
						<div className="col-12 col-xl-8">
							<div className="row gx-5 gy-5">
								{posts.map((p, i) => {
									return <PostBlock post={p} key={i} />;
								})}
							</div>
						</div>

						<aside class="col-12 col-xl-4 mt-4 ps-5">
							<div class="row">
								<div class="profile p-4 col col-xl-12 me-3">
									<div class="farm-top">
										<div class="farm d-flex justify-content-between align-items-center">
											<div class="farm-name position-relative">
												<h4 class="m-offset">rowfruit編輯部</h4>
												<div class="rating position-absolute">
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa grey fa-star" aria-hidden="true"></i>
												</div>
											</div>
											<div class="avatar">
												<img
													class="object-fit"
													src="images/image1.jpg"
													alt=""
												/>
											</div>
										</div>
									</div>
									<div class="farm-content mt-5">
										<p>
											在地小農，自家種植，自產自銷
											有機無毒無農藥，天天去豆漿店載豆渣佐以奶粉、養樂多、黑糖來施肥
										</p>
										<p>在地小農辛苦種植，保證安心健康新鮮</p>
									</div>
									<div class="farm-connect">
										<p>聯絡我</p>
										<div class="connect-icon">
											<i class="fab fa-facebook"></i>
											<i class="fab fa-line"></i>
											<i class="fas fa-phone-alt"></i>
										</div>
									</div>
								</div>
								<div
									class="
								article-catagory
								mt-xl-5
								p-xl-5 p-4
								col col-xl-12
								d-none d-md-block
							"
								>
									<h5>文章分類</h5>
									<ul class="list-unstyled ms-4 mt-4">
										<li class="mt-4">
											<span class="hit-block fruit">F</span>
											<span class="hit-content text-muted">水果(15)</span>
										</li>
										<li class="mt-4">
											<span class="hit-block live">L</span>
											<span class="hit-content text-muted">生活</span>
										</li>
										<li class="mt-4">
											<span class="hit-block knowledge">K</span>
											<span class="hit-content text-muted">營養知識(6)</span>
										</li>
										<li class="mt-4">
											<div>
												<span class="hit-block story">S</span>
												<span class="hit-content text-muted">故事(15)</span>
											</div>
										</li>
										<li class="mt-4">
											<span class="hit-block other">O</span>
											<span class="hit-content text-muted">其他(15)</span>
										</li>
									</ul>
									<div class="hit-small mt-5 d-none d-xl-block">
										<h5 class="mb-4">熱門文章</h5>
										<div class="d-flex mb-4">
											<div class="hit-title ms-4">
												<div>
													<span class="hit-block fruit">F</span>
													<span class="hit-content text-muted">水果</span>
												</div>

												<span class="d-block sub-title text-muted">
													不漂亮 ≠ 不能吃！？ 每顆水果其實都值得...
												</span>
											</div>
										</div>
										<div class="d-flex mb-4">
											<div class="hit-title ms-4">
												<div>
													<span class="hit-block fruit">F</span>
													<span class="hit-content text-muted">水果</span>
												</div>

												<span class="d-block sub-title text-muted">
													不漂亮 ≠ 不能吃！？ 每顆水果其實都值得...
												</span>
											</div>
										</div>
										<div class="d-flex mb-4">
											<div class="hit-title ms-4">
												<div>
													<span class="hit-block fruit">F</span>
													<span class="hit-content text-muted">水果</span>
												</div>

												<span class="d-block sub-title text-muted">
													不漂亮 ≠ 不能吃！？ 每顆水果其實都值得...
												</span>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</aside>
					</div>
				</div>
			</>
		);
}
export default BlogPage;