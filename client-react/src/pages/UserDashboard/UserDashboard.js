
import React , { Component } from 'react'
import './userdashboard.scss'
import axios from 'axios';
import Swal from "sweetalert2";
class UserDashboard extends Component {
	constructor(){
		super();
		this.state = {
			account:"",
			name:"",
			password:"",
			confirmPassword:"",
			email:"",
			phone:"",
			address:"",
			password_has_error:false
		}
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
			account:data.account,
			name:data.name,
			password:data.password,
			confirmPassword:data.password,
			email:data.email,
			phone:data.phone,
			address:data.address
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

	checkPassword() {
		if(!this.state.password || this.state.password !== this.state.confirmPassword) {
		   this.setState({password_has_error:true});
	   }
	   else {
		   this.setState({password_has_error:false});
	   }
   }

   handleChange = (event) => {
	   this.setState({[event.target.name] : event.target.value });

	   if (event.target.name === 'password' || event.target.name === 'confirmPassword')
		   this.checkPassword();
   }

   handleSubmit(event) {
	   event.preventDefault(); 
	   // TODO: will submit the form here
   }

	putUserDetail=() => {
		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));
		let body = { 
			id:payload.id,
			account:this.state.account,
			name:this.state.name,
			password:this.state.password,
			confirmPassword:this.state.password,
			email:this.state.email,
			phone:this.state.phone,
			address:this.state.address
			
		};

		axios
		.put('http://localhost:5000/api/member/'+payload.id,body)
	
		.then((res) => {
			Swal.fire({
				position: 'center-center',
				icon: 'success',
				title: '修改成功',
				showConfirmButton: false,
				timer: 1500,
			  })
			localStorage.setItem('name',this.state.name);
			window.location.reload();
			console.log(res.data[0]);
		})
	}
    render(){

		const datas = this.state;

		return (
			<>
			   <div>
				<div className="container mb-5 mt-3 p-5 mx-auto">
					<h3 className="text-center mb-4">修改會員資料</h3>

					<div className="row g-4 mx-auto px-5">
						<div className="col-12 text-center">
							<label htmlFor="fileInput">
								<i className="settingsPPIcon fas fa-user"></i>
							</label>
							<input
								type="file"
								name=""
								id="fileInput"								
								hidden
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
						<div className="col-md-6">
							<label for="inputPassword" className="form-label">
								密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								name="password"
								minLength="6"
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
								name="confirm"
								minLength="6"
								defaultValue={this.state.confirmPassword}
								onChange={(event) => this.setText(event)}
							/>
						</div>
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
