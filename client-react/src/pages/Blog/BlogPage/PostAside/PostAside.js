import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Context } from "../../../../context/Context";

const category = [
	"Fruit",
	"History",
	"Knowledge",
	"Live",
	"Other",
	
];

const categoryText = ["水果", "歷史", "知識", "生活", "其他"];
const convertCategoryToText = (v) => {
	const index = category.indexOf(v);

	return categoryText[index];
};


 function PostAside(props) {
	 const { hotArticle } = props;
	 const { farmeruser, dispatch } = useContext(Context);
	 const PF = "http://localhost:5000/images/";

	// console.log(hotArticle[0])

    return (
			<>
				<aside className="col-12 col-xl-4 mt-4 ps-5">
					<div className="row">
						<div className="k-profile p-4 col col-xl-12 me-3 d-flex flex-column jusitify-content-between">
							<div className="farm-top">
								<div className="farm d-flex justify-content-between align-items-center">
									<div className="farm-name position-relative">
										{" "}
										{farmeruser ? (
											<h4 className="m-offset">{farmeruser.fram_name}</h4>
										) : (
											<h4 className="m-offset">rowfruit編輯部</h4>
										)}
										<div className="rating">
											{farmeruser ? (
												<ReactStars size={20} edit={false} value={0} />
											) : (
												<ReactStars size={20} edit={false} value={5} />
											)}
										</div>
									</div>
									<div className="avatar">
										{farmeruser ? (
											<img
												className="object-fit"
												src={PF + farmeruser.avatar}
												alt=""
											/>
										) : (
											<img
												className="object-fit"
												src={PF + "null.png"}
												alt=""
											/>
										)}
									</div>
								</div>
							</div>
							<div className="farm-content mt-5">
								{farmeruser ? (
									farmeruser.content
								) : (
									<p>打造小農與消費者互信的平台</p>
								)}
							</div>

							<div className="farm-connect">
								<p>聯絡我</p>
								<div className="d-flex justify-content-between">
									<div>
										<i className="fab connect-icon fa-facebook"></i>
										<i className="fab connect-icon fa-line"></i>
										<i className="fas connect-icon fa-phone-alt"></i>
									</div>
									
									<div>
									{farmeruser ? (<Link className="writeSubmit" to="/writepage">
											發表文章
										</Link>) : ""}
										
									</div>
								</div>
							</div>
						</div>
						<div
							className="
								article-catagory
								mt-xl-5
								p-xl-5 p-4
								col col-xl-12
								d-none d-md-block
							"
						>
							<h5>文章分類</h5>
							<ul className="list-unstyled ms-4 mt-4">
								{category.map((cat) => {
									return (
										<Link to={`/blog/?${cat}`}>
											<li className="mt-4">
												<span className={`hit-block ${cat}`}>
													{cat.slice(0, 1)}
												</span>
												<span className="hit-content text-muted">
													{convertCategoryToText(cat)}
												</span>
											</li>
										</Link>
									);
								})}
							</ul>
							<div className="hit-small mt-5 d-none d-xl-block">
								<h5 className="mb-4">熱門文章</h5>
								{hotArticle &&
									hotArticle.map((post) => {
										return (
											<div className="d-flex mb-4">
												<Link to={`/post/${post.id}`}>
													<div className="hit-title ms-4">
														<div>
															<span className={`hit-block ${post.category}`}>
																{post.category.slice(0, 1)}
															</span>
															<span className="hit-content text-muted">
																{convertCategoryToText(post.category)}
															</span>
														</div>

														<span className="d-block sub-title text-muted text-bk">
															{post.title}
														</span>
													</div>
												</Link>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</aside>
			</>
		);
}
export default PostAside;