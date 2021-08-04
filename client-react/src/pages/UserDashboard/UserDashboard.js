
import React , { Component } from 'react'
import './userdashboard.scss'
import axios from 'axios';
import Swal from "sweetalert2";
class UserDashboard extends Component {
	constructor(){
		super();
		this.state = {
			id:"",
			account:"",
			name:"",
			password:"",
			confirmPassword:"",
			email:"",
			phone:"",
			address:"",
			avatar:"",
			password_has_error:false,
			file:null
		}
		console.log(this.state)
		this.getuserDetail();
	}

	
	
	

	getuserDetail(){
	
		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));
		axios
		.get('http://localhost:5000/api/member/'+payload.id)
	
		.then((res) => {
			console.log(res.data[0]);
			const data = res.data[0];
		this.setState({
			id:data.id,
			account:data.account,
			name:data.name,
			password:data.password,
			confirmPassword:data.password,
			email:data.email,
			phone:data.phone,
			address:data.address,
			file:data.file,
			avatar:data.avatar
		})
	  })
	}

	setText = (event)=>{
		console.log(event.target.value);
		let key = event.target.name
		this.setState({
			
			[key]:event.target.value,
		});
	} 
	setFile = (event)=>{
		let key = event.target.name
		this.setState({
			
			[key]:event.target.files[0],
		});
	 this.state.file = event.target.files[0]
	 console.log("this.state.file",this.state.file)
	} 

    dialog(text) {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: text,
		showConfirmButton: false,
		timer: 2000,
	})
}
	putUserDetail=() => {
		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));
		let body = { 
			id:payload.id,
			account:this.state.account,
			name:this.state.name,
			password:this.state.password,
			confirmPassword:this.state.confirmPassword,
			email:this.state.email,
			phone:this.state.phone,
			address:this.state.address,
			avatar:this.state.avatar,
			file:this.state.file
		};
		 console.log("this.state.file ",this.state.file)

		if (this.state.file) {
			const data = new FormData();
			const filename =
				body.id + body.file.name.substr(body.file.name.lastIndexOf("."));
	
			data.append("name", filename);
			data.append("file", body.file);				
			body.avatar = filename;
			console.log("data :",data)
			try {
				axios.post("/upload", data);
				
			} catch (err) {}
			
		}

		console.log(body.password === body.confirmPassword);
		console.log(this.state.password,this.state.confirmPassword);
		console.log(this.state.Password === this.state.confirmPassword)
		if(this.state.name==='') {
			dialog('姓名不可為空值');
		} else if ( this.state.password==='') {
			dialog('請輸入密碼');
		} else if ( this.state.confirmPassword==='') {
			dialog('請在輸入一次密碼');
		}else if ( body.password !== body.confirmPassword) {
			dialog('密碼輸入不一致');
		}else if ( this.state.phone==='') {
			dialog('請輸入電話');
		}else if ( this.state.email.indexOf('@')===-1) {
			dialog('信箱內必須包含@');
		} else if (   this.state.address==='') {
			dialog('請輸入地址');
		}
		else {
		axios
		.put('http://localhost:5000/api/member/'+payload.id,body)

	    

		.then((res) => {
			Swal.fire({
				position: 'center-center',
				icon: 'success',
				title: '修改成功',
				showConfirmButton: false,
				timer: 3000,
				onClose:replacePage()
			  })
			  localStorage.setItem('name',this.state.name);
			  function replacePage(){
				console.log('reloadPage');
			setTimeout(()=>{
				window.location.replace("/");
			},2000)
			}
			console.log(res.data[0]);
		})
		}

		function dialog(text) {
			Swal.fire({
				position: 'center',
				icon: 'info',
				title: text,
				showConfirmButton: false,
				timer: 2000,
			})
		}
	}

	
    render(){

		const datas = this.state;
		console.log(datas)
		// const chromeFileUrl =  URL.createObjectURL(datas.file)
		// console.log(chromeFileUrl)
		console.log(datas.file)
		console.log(this.state.avatar)
		
		return (
			<>
			   <div>
				<div className="container mb-5 mt-3 p-5 mx-auto">
					<h3 className="text-center mb-4">修改會員資料</h3>

					<div className="row g-4 mx-auto px-5">
						<div className="col-12 text-center">
							<label htmlFor="fileInput">
							{ this.state.file || this.state.avatar ? (
								<div className="farmeravatar">
									<img
										src={
											this.state.file  ? window.URL.createObjectURL(datas.file)  : "http://localhost:5000/images/" + datas.avatar
										}
										alt=""
										className="object-fit"
									/>
								</div>
							) : (
								<i className="settingsPPIcon fas fa-user"></i>
							)}
							</label>
							<input
								type="file"
								name=""
								id="fileInput"								
								hidden
								onChange={(event) => this.setFile(event)}
							/>
						</div>
						<div className="col-md-6">
							<img src="" alt="" />
							<label for="inputUser" className="form-label">
								帳號
							</label>
							<input
								type="text"
								className="form-control form-control-plaintext"
								id="inputUser"
								name="account"
								defaultValue={this.state.account}
								readOnly
							/>
						</div>
						<div className="col-md-6">
							<label for="inputPassword4" className="form-label">
								姓名
							</label>
							<input type="text" className="form-control" id="inputPassword4" name="name"
								defaultValue={datas.name}
								onChange={(event) => this.setText(event)}
							/>
						</div>
						{/* <div className="col-md-6">
							<label for="inputPassword" className="form-label">
								密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								name="password"
								defaultValue={this.state.password}
								onChange={(event) => this.setText(event)}
							/>
						</div>
						<div className="col-md-6">
							<label for="inputPassword2" className="form-label">
								再次確認密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword2"
								name="confirmPassword"
								defaultValue={this.state.confirmPassword}
								onChange={(event) => this.setText(event)}
							/>
						</div> */}
						<div className="col-4">
							<label for="inputPhone" className="form-label">
								電話
							</label>
							<input type="tel" className="form-control" id="inputPhone"   name="phone"
								defaultValue={this.state.phone}
								onChange={(event) => this.setText(event)}
							/>
						</div>
						<div className="col-8">
							<label for="inputEmail" className="form-label">
								信箱
							</label>
							<input type="email" className="form-control" id="inputEmail"   name="email"
								defaultValue={this.state.email}
								onChange={(event) => this.setText(event)}
							/>
						</div>
						<div className="col-12">
							<label for="inputAddress" className="form-label">
								地址
							</label>
							<input type="text" className="form-control" id="inputAddress" name="address"
								defaultValue={this.state.address}
								onChange={(event) => this.setText(event)}
							/>
						</div>

						<div className="col-12">
							<button  className="DSnormal-btn"
							onClick={this.putUserDetail}
							>
								送出
							</button>
						</div>
					</div>
				</div>
			  </div>
			  
			</>
		);
    }
}

export default UserDashboard;
