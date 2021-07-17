import React from 'react'


 function HotPost(props) {
     const {post} = props
	 const PF = "http://localhost:5000/images";
     function catchImgSrc(str) {
				str = str.match( /(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g); 
				return str;
			}
    return (
			<>
				<div className="d-flex mb-3 justify-content-between position-relative">
					<div className="hit-title d-flex flex-column justify-content-between me-3">
						<div>
							<span className="hit-block fruit">F</span>
							<span className="hit-content text-white">{post.category}</span>
						</div>

						<span className="d-block sub-title text-white  text-bk">
							{post.title}
						</span>
					</div>
					<div className="hit-img">
						<img
							src={PF + catchImgSrc(post.content)}
							className="object-fit"
							alt=""
						/>
					</div>
				</div>
				{console.log(catchImgSrc(post.content))}
			</>
		);
}
export default HotPost;