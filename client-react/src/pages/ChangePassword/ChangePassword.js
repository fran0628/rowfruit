import React, { useState } from "react";
import "./ChangePassword.scss";
import axios from "axios";
import Swal from "sweetalert2";



function ChangePassword (props) {

  const {checkLogin } = props;

  const [oldPassword, setOldPassword] = useState("");

  function oldPasswordChange(e) {
    setOldPassword(e.target.value);
  }

  const [checkPassword, setCheckPassword] = useState("");


  const [newPassword, setNewPassword] = useState("");

  function setNewPasswordChange(e) {
    setNewPassword(e.target.value);
  }

  const [reNewPassword, setReNewPassword] = useState("");

  function reNewPasswordChange(e) {
    setReNewPassword(e.target.value);
  }

  const [name ,setName] = useState("")
  const [account ,setAccount] = useState("")
 
  const [phone ,setPhone] = useState("")
  const [email ,setEmail] = useState("")
  const [address ,setAddress] = useState("")
  const [avatar ,setAvatar] = useState("")

  console.log(`"oldPassword :"${oldPassword},"newPassword :"${newPassword},"reNewPassword :"${reNewPassword}`)

	function getuserDetail(){
	
		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));
		axios
		.get('http://localhost:5000/api/member/'+payload.id)
	
		.then((res) => {
			// console.log("res.data[0].password",res.data[0].password);
			const data= res.data[0] ;
            console.log("res.data[0]",res.data[0])
            setName(res.data[0].name);
            // console.log("name :",name)
            // setPassword(res.data[0].password);
            setAccount(res.data[0].account);
            setCheckPassword(res.data[0].password);
            setPhone(res.data[0].phone);
            setEmail(res.data[0].email);
            setAddress(res.data[0].address);
            setAvatar(res.data[0].avatar);
	


	  })
	}
    getuserDetail()

       
	
  



    function dialog(text) {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: text,
		showConfirmButton: false,
		timer: 2000,
	})
}
	function putUserDetail ()  {
        
		const token = localStorage.getItem('token').split(" ")[1];
	  
		let payload = JSON.parse(atob(token.split(".")[1]));

        console.log("payload :",payload)
		let body = { 
            name:name,
            account:account,
			oldPassword:checkPassword,
			password:newPassword,
            phone:phone,
            email:email,
            address:address,
            avatar:avatar
			
		};
        console.log("body :",body)
        console.log("oldPassword :",oldPassword)

		if( oldPassword==='') {
			dialog('請輸入目前的密碼');
		} else if (oldPassword !== checkPassword) {
			dialog('您輸入的密碼錯誤');
		} else if ( newPassword==='') {
			dialog('請輸入想改的密碼');
		} else if ( newPassword.length<6) {
			dialog('您輸入的密碼不能少於6位數');
		}else if ( reNewPassword==='') {
			dialog('請在輸入一次密碼');
		} else if ( reNewPassword.length<6) {
			dialog('您輸入的密碼不能少於6位數');
		}else if ( newPassword !== reNewPassword) {
			dialog('您密碼輸入不一樣');
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
				timer: 10000,
				onClose:reloadPage()
			  })
			  function reloadPage(){
				console.log('reloadPage');
			setTimeout(()=>{
				window.location.replace("/");
			},1500)
			}
			console.log("res.data[0] :",res.data[0]);
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



		return (
			<>
			   <div>
				<div className="container mb-5 mt-3 p-5 mx-auto">
					<h3 className="text-center mb-4">會員修改密碼</h3>

					<div className="row g-4 mx-auto px-5 d-flex  justify-content-center">
				
						<div className="col-md-7">
							<label for="inputPassword" className="form-label">
								目前密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								name="password"
								Value={oldPassword}
								onChange={oldPasswordChange}
							/>
						</div>
						<div className="col-md-7">
							<label for="password" className="form-label">
								新密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
                                value={newPassword}
								onChange={setNewPasswordChange}
							/>
						</div>
						<div className="col-md-7">
							<label for="reNewPassword" className="form-label">
								確認新密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="reNewPassword"
								name="reNewPassword"
								Value={reNewPassword}
								onChange={reNewPasswordChange}
							/>
						</div>

						<div className="col-12">
							<button  className="DSnormal-btn"
							onClick={putUserDetail}
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

export default ChangePassword;
