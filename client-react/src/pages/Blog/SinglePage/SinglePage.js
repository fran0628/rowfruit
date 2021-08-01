import React from 'react'
import PostAside from '../BlogPage/PostAside/PostAside'
import './singlepage.scss'
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState, useContext,useRef } from "react";
import FacebookComment from '../../../component/FacebookComment/FacebookComment';
import axios from "axios";

 const PF = "http://localhost:5000/images";

 function SinglePage() {
    const location = useLocation();
    console.log(location)
    const path = location.pathname.split("/")[2];
	console.log(path)
    const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
    const [time, setTime] = useState("");
	const [id, setId] = useState("");
    const [content,setContent]=useState(null)
    
	
	    // console.log(path)
    useEffect(() => {
			const getPost = async () => {
				const res = await axios.get("/post/" + path);
				const post = res.data[0]
                console.log(post)
                setTitle(post.title);
                setAuthor(post.author)
                setTime(post.created_time);
                setContent(post.content.replace(
											'src=".',
											`class="object-fit" src="${PF}`
										));
				setId(post.id)
                
			};
            
			getPost();
		}, [path]);
        
        
   

    return (
			<>
				<div class="share-link position-fixed">
					<div class="share">分享</div>
					<div class="link p-2">
						<a class="d-block">
							<i class="fab fa-facebook"></i>
						</a>
						<a  class="d-block">
							<i class="fab fa-twitter"></i>
						</a>
						<a  class="d-block">
							<i class="fas fa-paperclip"></i>
						</a>
					</div>
				</div>
				<div class="container mt-5">
					<div class="row">
						<div class="col-xl-8">
							<div class="article-content-area">
								<h1 class="text-muted mt-3">{title}</h1>
								<p>
									- 作者 {author}·{new Date(time).toLocaleDateString()}
								</p>
								<div
									class="article-content"
									dangerouslySetInnerHTML={{
										__html: content
									}}
								></div>
							</div>
							<div class="row mt-5 border-top border-bottom">
								<div class="col-6 border-end d-flex flex-column justify-content-center">
									<div class="mt-4 mb-3">
										<span class="hit-block live">
											<i class="fa fa-arrow-left" aria-hidden="true"></i>
										</span>
										<span class="hit-content grey">上一篇</span>
									</div>
									<div class="pre-title mb-5">
										<h5 class="grey">多吃水果會獲得哪些好處？</h5>
									</div>
								</div>
								<div
									class="
								col-6
								border-start
								d-flex
								flex-column
								justify-content-center
								align-items-end
							"
								>
									<div class="mt-4 mb-3">
										<span class="hit-content grey">下一篇</span>
										<span class="hit-block live">
											<i class="fa fa-arrow-right" aria-hidden="true"></i>
										</span>
									</div>
									<div class="pre-title mb-5">
										<h5 class="grey text-end">
											小農水果到你家：讓農民和消費者 都安心的「rowfruit」平台
										</h5>
									</div>
								</div>
							</div>
							<FacebookComment id={id} />
						</div>
						<PostAside />
					</div>
				</div>
				
			</>
		);
}
export default SinglePage;