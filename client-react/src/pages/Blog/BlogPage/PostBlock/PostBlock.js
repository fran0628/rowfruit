import React from 'react'

 function PostBlock(props) {
     function deleteHtmlTag(str) {
				str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim(); 
				return str;
			}
     const {post} =props
      const PF = "http://localhost:5000/images";
			function catchImgSrc(str) {
				str = str.match(/(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g);
				return str;
			}
    return (
			<>
				<div className="col-12 col-md-6">
					<div className="card border-0 rounded-0">
						<div className="mb-3">
							<span className="hit-block story">S</span>
							<span className="hit-content dark">{post.category}</span>
						</div>

						<img
							src={PF + catchImgSrc(post.content)}
							className="card-img-top rounded-0 object-fit "
							alt="..."
						/>
						<div className="card-body card-body-offset">
							<h5 className="card-title">
								{/* <a href="" className="stretched-link"> */}
								{post.title}
								{/* </a> */}
							</h5>
							<p className="mb-4">
								- 作者 {post.author}-
								{new Date(post.creat_time).toLocaleDateString()}
								2021-05-11 17:46:17
							</p>
							<p className="card-text text-bk">{deleteHtmlTag(post.content)}</p>
						</div>
					</div>
				</div>
				
			</>
		);
}
export default PostBlock;