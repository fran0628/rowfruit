import React from 'react'
import PostAside from '../BlogPage/PostAside/PostAside'
import './singlepage.scss'
import { useLocation, Link,useHistory } from "react-router-dom";
import { useEffect, useState, useContext,useRef } from "react";
import FacebookComment from '../../../component/FacebookComment/FacebookComment';
// import FacebookShare from '../../../component/FacebookShare/FacebookShare';
import axios from "axios";
import { Context } from "../../../context/Context";
import Swal from 'sweetalert2';
import MultiLevelBreadcrumb from '../../../component/BreadCrumb/MultiLevelBreadcrumb';
import ShareButtons from '../../../component/ShareButton/ShareButtons';

 function SinglePage() {
	 const history = useHistory()
	 const { farmeruser, dispatch } = useContext(Context);
    const location = useLocation();
    console.log(location)
    const path = location.pathname.split("/")[2];
	console.log(path)
    const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
    const [time, setTime] = useState("");
	const [id, setId] = useState("");
    const [content,setContent]=useState(null)
	const [dataLoading, setDataLoading] = useState(false);
	

    
	
	    // console.log(path)
    useEffect(() => {
			const getPost = async () => {
				const res = await axios.get("/post/" + path);
				const post = res.data[0]
                console.log(post)
                setTitle(post?.title);
                setAuthor(post?.author)
                setTime(post?.created_time);
                setContent(post?.content.replace(
											'src=',
											`class="object-fit" src=`
										));
				setId(post?.id)

				setDataLoading(true);
				setTimeout(() => setDataLoading(false), 1000);
                
			};
            
			getPost();
		}, [path]);
        
        
		const handleDelete = async () => {		

			try {
				await axios.delete(`/post/${id}`, {
					data: { author: farmeruser.name },
				});
				function sweetAlert() {
					Swal.fire({
						title: "您確定要刪除此文章嗎",
						text: "將無法回復此篇文章",
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#7367f0",
						cancelButtonColor: "#d33",
						confirmButtonText: "確認",
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire("已刪除!", "您已刪除此篇文章", "success");
						}
						
					});
				}
				sweetAlert();
				window.location.reload("/");
				
				// window.location.replace("/");
			} catch (err) {}
		};
   

    return (
			<>
				<MultiLevelBreadcrumb />

				<div class="container ">
					<div class="row">
						<div class="col-xl-8">
							<div class="article-content-area">
								<h1 class="text-muted mt-3">{title}</h1>
								<div className="d-flex justify-content-between align-items-center">
									<p>
										- 作者 {author}·{new Date(time).toLocaleDateString()}
									</p>
									{author === farmeruser?.name ? (
										<div>
											<i
												class="far fa-trash-alt k-delete me-2"
												onClick={handleDelete}
											></i>
											<Link to={`/edit/${id && id}`}>
												<i class="far fa-edit  k-edit"></i>
											</Link>
										</div>
									) : (
										""
									)}
								</div>
								{dataLoading ? (
									<div className="d-flex justify-content-center align-items-center h-100">
										<div className="spinner-border" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									</div>
								) : (
									<div
										class="article-content overflow-hidden border-bottom"
										dangerouslySetInnerHTML={{ __html: content }}
									></div>
								)}
							</div>
							<div className="d-flex  justify-content-around pt-3">
								{/* <FacebookShare id={id} /> */}
								<ShareButtons id={id} title={title} />
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