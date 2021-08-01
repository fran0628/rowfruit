import React, { useState, useEffect } from "react";
import HotPost from './HotPost/HotPost'
import './blogpage.css'
import axios from "axios";
import PostBlock from "./PostBlock/PostBlock";
import PostAside from "./PostAside/PostAside";
import { useLocation } from "react-router-dom";





 function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [hotArticle,setHotArticle]=useState([])

	const { search } = useLocation();
	console.log(search.slice(1,search.length));


		// const serverUrl = "http://localhost:5000/api"
		useEffect(() => {
			const fetchPosts = async () => {
				// const cat= 
				const res = await axios.get("/post/" + (search ? `cat/${search.slice(1, search.length)}`: ""));
				console.log(res);

				console.log(res.data);
				setPosts(res.data);
				setHotArticle(res.data.slice(0, 5));
			};

			fetchPosts();
		}, [search]);
			
			
			
		

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
							{hotArticle && hotArticle.map((p, i) => {
								return <HotPost post={p} key={i} />;
							})}
						</div>
					</div>
				</div>

				<div className="container mt-5">
					<div className="row">
						<div className="col-12 col-xl-8">
							<div className="row gx-5 gy-5">
								{posts && posts.map((p, i) => {
									return <PostBlock post={p} key={i} />;
								})}
							</div>
						</div>
						<PostAside hotArticle={hotArticle} />
					</div>
				</div>
			</>
		);
}
export default BlogPage;