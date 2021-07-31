
import React , { Component } from 'react'
import './userdashboard.scss'
import axios from 'axios';
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
			address:""
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
	
	putUserDetail(){


		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));
		let body = { 
			id:payload.id,
			account:this.userDetail.account,
			name:this.userDetail.name,
			password:this.userDetail.password,
			confirmPassword:this.userDetail.password,
			email:this.userDetail.email,
			phone:this.userDetail.phone,
			address:this.userDetail.address
			
		};

		axios
		.put('http://localhost:5000/api/member/',body)
	
		.then((res) => {
			console.log(res.data[0]);
		
		
		})
	}

	setMemberChange = (event)=>{
		console.log(event.target.value);
		this.setState({
			name:event.target.value,
			password:event.target.value,
			confirmPassword:event.target.value,
			address:event.target.value,
			phone:event.target.value
		})
		// this.setState({
		// 	account:data.account,
		// 	name:data.name,
		// 	password:data.password,
		// 	confirmPassword:data.password,
		// 	email:data.email,
		// 	phone:data.phone,
		// 	address:data.address
			
		// })
	} 

	click=() => {
		console.log(this.state.name)
	}
    render(){

		const datas = this.state;

		return (
			<>
				<div className="container mb-5 mt-3 p-5 mx-auto">
					<h3 className="text-center mb-4">修改會員資料</h3>

					<form className="row g-4 mx-auto px-5">
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
								defaultValue={this.state.account}
								readOnly
							/>
						</div>
						<div className="col-md-6">
							<label for="inputPassword4" className="form-label">
								姓名
							</label>
							<input type="text" className="form-control" id="inputPassword4" 
								defaultValue={datas.name}
								onChange={(event)=>this.setMemberChange.setState}
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
								defaultValue={this.state.password}
								onChange={(event)=>this.setMemberChange(event)}
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
								defaultValue={this.state.confirmPassword}
								onChange={(event)=>this.setMemberChange(event)}
							/>
						</div>
						<div className="col-4">
							<label for="inputPhone" className="form-label">
								電話
							</label>
							<input type="tel" className="form-control" id="inputPhone"  
								defaultValue={this.state.phone}
								onChange={(event)=>this.setMemberChange(event)}
							/>
						</div>
						<div className="col-8">
							<label for="inputAddress" className="form-label">
								地址
							</label>
							<input type="text" className="form-control" id="inputAddress" 
								defaultValue={this.state.address}
								onChange={(event)=>this.setMemberChange(event)}
							/>
						</div>

						<div className="col-12">
							<button type="submit" className="DSnormal-btn">
								送出
							</button>
						</div>
					</form>
				</div>
			</>
		);
    }
}

export default UserDashboard;
