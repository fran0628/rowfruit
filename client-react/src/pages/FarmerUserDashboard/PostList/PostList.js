import React,{useEffect,useContext,useState} from 'react'
import axios from 'axios';
import DashboardAside from '../component/DashboardAside';
import MultiLevelBreadcrumb from '../../../component/BreadCrumb/MultiLevelBreadcrumb';
import PostListItem from './PostListItem/PostListItem';
import { Context } from '../../../context/Context';
import './postlist.scss'

function PostList() {
     const { farmeruser, dispatch } = useContext(Context);
     const [posts, setPosts] = useState([]);
     const [reload,setReload]=useState(false)

      useEffect(() => {
				const fetchPosts = async () => {
					// const cat=
					const res = await axios.get(
						`/post/author/${farmeruser.name}`
					);
					
                    
					// console.log(res.data);
                    setPosts(res.data)
					
				};

				fetchPosts();
			}, [reload]);
    return (
			<>
				<div className="container-fluid ">
					<div className="row min-vh-100">
						<div className="col-3 col-lg-2 position-relative p-0 abjust-mb ">
							<DashboardAside />
						</div>
						<div className="col-9 col-lg-10">
							<div className="container mb-5 mx-auto">
								<MultiLevelBreadcrumb />
								<h3 className="text-center mb-4">文章列表</h3>
								<table className="k-table" cellpadding="15">
									<thead className="k-thead">
										<tr className="text-center">
											<th scope="col">文章編號</th>
											<th scope="col">文章標題</th>
											<th scope="col" className="k-th">文章內容</th>
											<th scope="col">文章類別</th>
											<th scope="col">發布時間</th>
											<th scope="col">狀態</th>
											<th scope="col">編輯</th>
										</tr>
									</thead>
									<tbody className="k-tbody">
										{posts &&
											posts.map((p, i) => {
												return (
													<PostListItem
														post={p}
														key={i}
														reload={reload}
														setReload={setReload}
													/>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default PostList;