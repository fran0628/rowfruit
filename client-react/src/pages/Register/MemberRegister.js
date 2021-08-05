import React, { useState } from "react";
import "./MemberRegister.scss";
import Swal from "sweetalert2";
import axios from 'axios'
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";


const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};


export default function MemberRegister(props) { 
  const {register,setRegister} = props

  const [fullname, setFullname ] = useState("")

  function fullnameChange (e) {
    setFullname(e.target.value)
  }

  const [account, setAccount ] = useState("")

  function accountChange (e){
    setAccount(e.target.value)
  }
  const [password, setPassword ] = useState("")

  function passwordChange (e){
    setPassword(e.target.value)
  }
  const [repassword, setRepassword ] = useState("")

  function rePasswordChange (e){
    setRepassword(e.target.value)
  }
  const [email, setEmail ] = useState("")

  function emailChange (e){
    setEmail(e.target.value)
  }

  const [address, setAddress ] = useState("")

  function addressChange (e){
    setAddress(e.target.value)
  }

  const [phone, setPhone ] = useState("")

  function phoneChange (e){
    setPhone(e.target.value)
  }

  console.log(`"fullname :"${fullname},"account :"${account},"password :"${password},"repassword :"${repassword},"email :"${email},"address :"${address},"phone :"${phone}`)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  function formData() {
    
     setRegister(() => {
      const newData = { ...register };
      console.log("newData :",newData)
      newData.name = fullname;
      newData.account = account;
      newData.password = password;
      newData.repassword = repassword;
      newData.email = email;
      newData.address = address;
      newData.phone = phone;

      registerData(newData);
    },
   );
  
}

function registerData(datas){
  if(datas.name==='') {
    dialog('姓名不可以為空');
  } else if ( datas.account==='') {
    dialog('帳號不可以為空');
  }else if ( datas.password==='') {
    dialog('密碼不可以為空');
  } else if ( datas.password.length<6) {
    dialog('密碼不能少於6位數');
  }else if ( datas.repassword ==='') {
    dialog('請再輸入一次密碼');
  }else if ( datas.repassword.length<6) {
    dialog('密碼不能少於6位數');
  }else if ( datas.password !== datas.repassword) {
    dialog('密碼兩者不相同');
  } else if ( datas.email==='') {
    dialog('請輸入信箱');
  }else if ( datas.email.indexOf('@')===-1) {
    dialog('信箱內必須包含@');
  }else if ( datas.address==='') {
    dialog('請輸入地址');
  }else if (  datas.phone==='') {
    dialog('請輸入電話');
  }
  else {
  axios.post('http://localhost:5000/api/member',datas)
    .then((result) => { console.log(result.data) })
    .catch((err) => { console.error(err) })

    Swal.fire({
		title: "註冊成功",
		text: "歡迎來到rowfruit",
		animation: false,
		confirmButtonText: "前往登入",
			timer: 2000,
      onClose:changePage()
		})
  }
  // console.log("datas.password === datas.repassword:" ,datas.password === datas.repassword)

  function dialog(text) {
		Swal.fire({
			position: 'center',
			icon: 'info',
			title: text,
			showConfirmButton: false,
			timer: 1500,
		})
	}

  function changePage(){
  setTimeout(()=>{
    window.location.href = 'memberlogin'
  },2000)
  }
}

  return (
		<>
			<MultiLevelBreadcrumb />
			<div className="MemberBanner" style={banner}>
				<div className="container ">
					<div className="row justify-content-center mt-5">
						<div className="col-lg-4 col-sm-8 mb-3 my-3">
							<div className="card shadow">
								<div className="MemberCardLogo text-center border-bottom">
									<img className="pt-3" src="MemberPhoto/logo.png" alt="" />
								</div>
								<div className="MemberBody">
									<div onSubmit={handleSubmit}>
										<h3 className="MemberRegister d-flex justify-content-center  mb-3">
											會員註冊
										</h3>
										<div className="mb-3">
											<input
												className="form-control"
												type="text"
												name="fullname"
												value={fullname}
												onChange={fullnameChange}
												placeholder="姓名"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="text"
												name="account"
												value={account}
												onChange={accountChange}
												placeholder="帳號"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="password"
												name="password"
												value={password}
												onChange={passwordChange}
												placeholder="密碼"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="password"
												name="repassword"
												value={repassword}
												onChange={rePasswordChange}
												placeholder="請再次確認密碼"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="email"
												name="email"
												value={email}
												onChange={emailChange}
												placeholder="電子信箱"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="text"
												name="address"
												value={address}
												onChange={addressChange}
												placeholder="地址"
											/>
										</div>
										<div className="mb-3">
											<input
												className="form-control"
												type="text"
												name="phone"
												value={phone}
												onChange={phoneChange}
												placeholder="電話"
											/>
										</div>
										<div className="d-none d-sm-flex justify-content-center  my-4">
											<button className="btn normal-btn" onClick={formData}>
												送出
											</button>
										</div>
										<div className=" d-sm-none my-4">
											<button className="btn rwd-btn">送出</button>
										</div>
										<div className="d-flex justify-content-center mb-3">
											<a className="back-login" href="memberlogin">
												<h5 className="back-login">已經有帳號了? 登入</h5>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
