import React, { useState, useContext, useEffect } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Context } from "../../../context/Context";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, Link, useHistory } from "react-router-dom";
import MultiLevelBreadcrumb from "../../../component/BreadCrumb/MultiLevelBreadcrumb";



function WritePage() {
	const history = useHistory();
	const { farmeruser, dispatch } = useContext(Context);
    const location = useLocation();
     const path = location.pathname.split("/")[2];
    //  console.log(path)
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [category, setCategory] = useState("");
	const [author, setAuthor] = useState(farmeruser.name);
	const [status, setStatus] = useState("");
	
	

        useEffect(() => {
					const getPost = async () => {
						const res = await axios.get("/post/" + path);
						const post = res.data[0];
						console.log(post);
						setTitle(post.title);
						setAuthor(post.author);	
                        setCategory(post.category)	
                        setStatus(post.status)				
						setContent(post.content)
						
						
					};

					getPost();
					
				}, [path]);

	const handleUpdate = async (e) => {
        e.preventDefault();
		const updatePost = {
			title: title,
			category: category,
			content: content,
			author: farmeruser.name,
			status: status,
		};
		console.log(updatePost)
		
		try {
		// 	// console.log()
			await axios.put(`/post/${path}`, updatePost);
			
            function sweetAlert() {
							Swal.fire({
								title: "修改成功",
								icon: "success",
								animation: false,
								confirmButtonText: "確認",
							}).then(function () {
								history.push(`/post/${path}`);
							});
						}
						sweetAlert();

			
		} catch (err) {}
	};

	return (
		<>
			<MultiLevelBreadcrumb />
			<div className="container p-3">
				<form className="writeForm" onSubmit={handleUpdate}>
					<div className="writeFormGroup">
						<input
							type="text"
							name="title"
							id=""
							defaultValue={title}
							placeholder="請輸入標題"
							className="writeInput"
							autoFocus={true}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="writeFormGroup">
						<CKEditor
							editor={ClassicEditor}
							config={{
								ckfinder: {
									uploadUrl: "http://localhost:5000/api/postupload",
								},
							}}
							// className="writeInput writeText"
							id="header"
							data={content}
							onReady={(editor) => {
								// You can store the "editor" and use when it is needed.
								console.log("Editor is ready to use!", editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setContent(data);
							}}
						/>
					</div>
					<div className="m-2">
						<label for="" class="col-form-label">
							<span class="text-danger">* </span>文章分類:
						</label>

						<select
							name="category"
							class="selectcategory"
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);
							}}
						>
							<option value="">請選擇</option>
							<option value="Fruit">水果</option>
							<option value="Knowledge">知識</option>
							<option value="Live">生活</option>
							<option value="History">歷史</option>
							<option value="Other">其它</option>
						</select>
						<div className="d-inline-block ms-5">
							<label for="" class="col-form-label">
								<span class="text-danger mr-5">* </span>文章狀態:
							</label>

							<select
								name="status"
								class="selectcategory"
								value={status}
								onChange={(e) => {
									setStatus(e.target.value);
								}}
							>
								<option value="">請選擇</option>
								<option value="on">公開</option>
								<option value="off">關閉</option>
							</select>
						</div>
					</div>

					<div className="d-flex justify-content-end">
						<button className="mt-4 writeSubmit" type="submit">
							發表文章
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
export default WritePage;
