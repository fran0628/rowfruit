import React, { useState } from "react";
import "./ChangePassword.scss";
import axios from "axios";
import Swal from "sweetalert2";
import UserDashboardAside from "../../component/UserDashboardAside.js/UserDashboardAside";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";


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
			dialog('????????????????????????');
		} else if (oldPassword !== checkPassword) {
			dialog('????????????????????????');
		} else if ( newPassword==='') {
			dialog('????????????????????????');
		} else if ( newPassword.length<6) {
			dialog('??????????????????????????????6??????');
		}else if ( reNewPassword==='') {
			dialog('????????????????????????');
		} else if ( reNewPassword.length<6) {
			dialog('??????????????????????????????6??????');
		}else if ( newPassword !== reNewPassword) {
			dialog('????????????????????????');
		}
		else {
		axios
		.put('http://localhost:5000/api/member/'+payload.id,body)
	
		.then((res) => {
			Swal.fire({
				position: 'center-center',
				icon: 'success',
				title: '????????????',
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
				<div className="container-fluid">
					<div className="row">
						<div className="col-3 col-lg-2 position-relative p-0 abjust-mb">
							<UserDashboardAside />
						</div>
						<div className="col-9 col-lg-10">
							<div className="container mb-5 mx-auto">
								<MultiLevelBreadcrumb />
								<h3 className="text-center mb-4">??????????????????</h3>

								<div className="row g-4 mx-auto px-5 d-flex  justify-content-center">
									<div className="col-md-7">
										<label for="inputPassword" className="form-label">
											????????????
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
											?????????
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
											???????????????
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
										<button className="DSnormal-btn" onClick={putUserDetail}>
											??????
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
    
}

export default ChangePassword;
