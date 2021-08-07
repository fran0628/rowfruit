import React from 'react'
import {Link} from 'react-router-dom'
const category = ["Fruit", "History", "Knowledge", "Live", "Other"];

const categoryText = ["水果", "歷史", "知識", "生活", "其他"];
const convertCategoryToText = (v) => {
	const index = category.indexOf(v);

	return categoryText[index];
};


 function HotPost(props) {
     const {post} = props	
     function catchImgSrc(str) {
				str = str.match(/(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g);
				if (str === null) {
					return "/logo.png";
				}
				return str;
			}
		
    return (
			<>
				<div className="d-flex mb-3 justify-content-between position-relative">
					<div className="hit-title d-flex flex-column justify-content-between me-3 js-flex">
						<div>
							<span className={`hit-block ${post.category}`}>
								{post.category.slice(0, 1)}
							</span>
							<span className="hit-content text-white">
								{convertCategoryToText(post.category)}
							</span>
						</div>

						<span className="d-block sub-title text-white  text-bk">
							<Link
								to={`/post/${post.id}`}
								className="stretched-link text-white"
							>
								{post.title}
							</Link>
						</span>
					</div>
					<div className="hit-img ji-flex align-self-end">
						<img
							src={catchImgSrc(post.content)}
							className="object-fit"
							alt=""
						/>
					</div>
				</div>
				{/* {console.log(catchImgSrc(post.content))} */}
			</>
		);
}
export default HotPost;