import React from 'react'
import './Fuserdashboard.scss'
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Swal from "sweetalert2";
import MultiLevelBreadcrumb from '../../component/BreadCrumb/MultiLevelBreadcrumb';
import DashboardAside from './component/DashboardAside';


function FarmerUserDashboard() {
	const { farmeruser, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
	const [avatar, setAvatar] = useState("");
	const [account, setAccount] = useState(farmeruser.account);
	const [id, setId] = useState(farmeruser.id);
	const [email, setEmail] = useState(farmeruser.email);
	const [password, setPassword] = useState(farmeruser.password);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [name, setName] = useState(farmeruser.name);
	const [phonenumber, setPhonenumber] = useState(farmeruser.phonenumber);
	const [content, setContent] = useState(farmeruser.content);
	const [line, setLine] = useState(farmeruser.line);
	const [address, setAddress] = useState(farmeruser.address);
	const [fram_name, setFram_name] = useState(farmeruser.fram_name);
	const [errorMsg, setErrorMsg] = useState("");
	const [success, setSuccess] = useState(false);
	
	const PF = "http://localhost:5000/images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		// 	dispatch({ type: "UPDATE_START" });
		const updatedFarmerUser = {
			id,
			account,
			password,
			confirmPassword,
			email,
			name,
			phonenumber,
			content,
			line,
			address,
			fram_name,
			
		};
			if (file) {
				const data = new FormData();
				const filename =
					farmeruser.id + file.name.substr(file.name.lastIndexOf("."));
				data.append("name", filename);
				data.append("file", file);				
				updatedFarmerUser.avatar = filename;
				// console.log(data)
				try {
					await axios.post("/upload", data);
					
				} catch (err) {}
			}
		try {
		const res = await axios.put(
			"farmeruser/" + farmeruser.id,
			updatedFarmerUser
		);
		// console.log(updatedFarmerUser);		
		
		// console.log(res);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: updatedFarmerUser });
			 function sweetAlert() {
					Swal.fire({
						title: "修改成功",
						
						animation: true,
						confirmButtonText: "關閉",
					}).then(function () {
						window.location.replace("/farmerlist");
					});
				}
				sweetAlert();
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			 console.log(err)  
			console.log(err.response) 
			setErrorMsg(err.response.data.text);
		}
	};
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-3 col-lg-2 position-relative p-0 abjust-mb">
						<DashboardAside />
					</div>
					<div className="col-9 col-lg-10">
						<div className="container mb-5 mx-auto">
							<MultiLevelBreadcrumb />
							<h3 className="text-center mb-4">修改小農會員資料</h3>
							<form className="row g-4 mx-auto px-5" onSubmit={handleSubmit}>
								<div className="col-12 text-center">
									<label htmlFor="fileInput">
										{file || farmeruser.avatar ? (
											<div className="farmeravatar">
												<img
													src={
														file
															? URL.createObjectURL(file)
															: PF + farmeruser.avatar
													}
													alt=""
													className="object-fit"
												/>
											</div>
										) : (
											<i className="settingsFPIcon fas fa-user"></i>
										)}
									</label>
									<input
										type="file"
										name=""
										id="fileInput"
										hidden
										onChange={(e) => setFile(e.target.files[0])}
									/>
								</div>
								<div className="col-md-6">
									<img src="" alt="" />
									<input
										type="text"
										className="form-control form-control-plaintext p-2"
										defaultValue={farmeruser.id}
										name="id"
										readOnly
										hidden
									/>
									<label for="inputUser" className="form-label">
										帳號
									</label>
									<input
										type="text"
										className="form-control form-control-plaintext p-2"
										defaultValue={farmeruser.account}
										id="inputUser"
										name="account"
										readOnly
									/>
								</div>
								<div className="col-md-6">
									<label for="inputName" className="form-label">
										姓名
									</label>
									<input
										type="text"
										className="form-control"
										defaultValue={farmeruser.name}
										id="inputName"
										name="name"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="col-md-6">
									<label for="inputPassword" className="form-label">
										<span className="text-danger">*</span>密碼
									</label>
									<input
										type="password"
										className="form-control"
										name="password"
										id="inputPassword"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="col-md-6">
									<label for="inputPassword2" className="form-label">
										<span className="text-danger">*</span>再次確認密碼
									</label>
									<input
										type="password"
										className="form-control"
										name="confirmPassword"
										id="inputPassword2"
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</div>
								<div className="col-4">
									<label for="inputPhone" className="form-label">
										電話
									</label>
									<input
										type="tel"
										className="form-control"
										defaultValue={farmeruser.phonenumber}
										id="inputPhone"
										name="phonenumber"
										onChange={(e) => setPhonenumber(e.target.value)}
									/>
								</div>
								<div className="col-8">
									<label for="inputAddress" className="form-label">
										地址
									</label>
									<input
										type="text"
										className="form-control"
										defaultValue={farmeruser.address}
										id="inputAddress"
										name="address"
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div className="col-6">
									<label for="inputFarm" className="form-label">
										果園名稱
									</label>
									<input
										type="text"
										className="form-control"
										id="inputFarm"
										name="fram_name"
										defaultValue={farmeruser.fram_name}
										onChange={(e) => setFram_name(e.target.value)}
									/>
								</div>
								<div className="col-6">
									<label for="inputLine" className="form-label">
										line帳號
									</label>
									<input
										type="text"
										className="form-control"
										defaultValue={farmeruser.line}
										id="inputLine"
										name="line"
										onChange={(e) => setLine(e.target.value)}
									/>
								</div>
								<div className="col-12">
									<label for="inputEmail" className="form-label">
										<span className="text-danger">*</span>電子信箱
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail"
										defaultValue={farmeruser.email}
										name="email"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="col-12">
									<label for="inputTextarea" className="form-label">
										自我介紹
									</label>
									<textarea
										id="inputTextarea"
										class="form-control"
										row="3"
										name="content"
										defaultValue={farmeruser.content}
										onChange={(e) => setContent(e.target.value)}
									/>
								</div>
								{errorMsg && (
									<small className="text-danger form-text">{errorMsg}</small>
								)}
								<div className="col-12">
									<button type="submit" className="DSnormal-btn">
										送出
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default FarmerUserDashboard;