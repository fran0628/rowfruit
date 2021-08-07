import React,{useContext} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Context } from '../../../../context/Context';

const category = ["Fruit", "History", "Knowledge", "Live", "Other"];
const categoryText = ["水果", "歷史", "知識", "生活", "其他"];
const convertCategoryToText = (v) => {
	const index = category.indexOf(v);

	return categoryText[index];
};
const theStatus=['on','off']
const theStatusText=['公開','關閉']
const convertStatusToText = (v) => {
	const index = theStatus.indexOf(v);

	return theStatusText[index];
};


 function deleteHtmlTag(str) {
		str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim();
		return str;
 }

 function PostListItem(props) {
     const { farmeruser, dispatch } = useContext(Context);

     const {post,reload,setReload}=props
    
     console.log(post)
     const history=useHistory();
     const handleDelete = async () => {
				try {
					// await axios.delete(`/post/${post.id}`, {
					// 	data: { author: farmeruser.name },
					// });
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
                                axios
																	.delete(`/post/${post.id}`, {
																		data: { author: farmeruser.name },
																	})
																	.then(function (response) {
																		console.log(response);
																	})
																	.catch(function (error) {
																		console.log(error);
																	});
                                
							}							
						}).then((result)=>{
                           setReload(true)
                        });
					}
					sweetAlert();
                    

				
				} catch (err) {}
			};
   
      
    return (
			<>
				<tr className="k-tr">
					<td>{post?.id}</td>
					<td>{post?.title}</td>
					<td className="tx-bk">{deleteHtmlTag(post?.content)}</td>
					<td>{convertCategoryToText(post?.category)}</td>
					<td>{new Date(post?.created_time).toLocaleDateString()}</td>
					<td>{convertStatusToText(post?.status)}</td>
					<td>
						<i
							class="far fa-trash-alt k-delete me-2"
							onClick={handleDelete}
						></i>
						<Link to={`/edit/${post?.id}`}>
							<i class="far fa-edit  k-edit"></i>
						</Link>
					</td>
				</tr>
			</>
		);
}
export default PostListItem;