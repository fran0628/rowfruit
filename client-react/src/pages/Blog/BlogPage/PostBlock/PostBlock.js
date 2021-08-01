import React from 'react'
import {Link} from 'react-router-dom'
// const LogoImg = require("./211.jpg")

const category = ["Fruit", "History", "Knowledge", "Live", "Other"];

const categoryText = ["水果", "歷史", "知識", "生活", "其他"];
const convertCategoryToText = (v) => {
	const index = category.indexOf(v);

	return categoryText[index];
};


 function PostBlock(props) {
     function deleteHtmlTag(str) {
				str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim(); 
				return str;
			}
     const {post} =props
      const PF = "http://localhost:5000/images";
			function catchImgSrc(str) {
				str = str.match(/(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g);
				if(str===null){
					return "/logo.png"
				}
				return str;
			}
		
		
			return (
				<>
					<div className="col-12 col-md-6">
						<div className="card border-0 rounded-0 position-relative">
							<div className="mb-3">
								<span className={`hit-block ${post.category}`}>{post.category.slice(0, 1)}</span>
								<span className="hit-content dark">
									{convertCategoryToText(post.category)}
								</span>
							</div>

							<img
								src={PF + catchImgSrc(post.content)}
								className="card-img-top rounded-0 object-fit "
								alt="..."
							/>
							<div className="card-body card-body-offset">
								<h5 className="card-title">
									<Link to={`/post/${post.id}`} className="stretched-link">
										{post.title}
									</Link>
								</h5>
								<p className="mb-4">
									- 作者 {post.author}-
									{new Date(post.creat_time).toLocaleDateString()}
								</p>
								<p className="card-text text-bk">
									{deleteHtmlTag(post.content)}
								</p>
							</div>
						</div>
					</div>
					{/* {console.log(catchImgSrc(post.content))} */}
				</>
			);
}
export default PostBlock;