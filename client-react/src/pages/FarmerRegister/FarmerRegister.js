
import { Link, useHistory } from "react-router-dom";
// import { browserHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


import "./MemberRegister.scss";

const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default function FarmerRegister() {
      const [account, setAccount] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");
			const [confirmPassword, setConfirmPassword] = useState("");
			const [fram_name, setFram_name] = useState("");
			const [error, setError] = useState("false");
      const [errorMsg,setErrorMsg]=useState("")
	   const history = useHistory();

    const handleSubmit = async (e) => {
			e.preventDefault();
			setError(false);
			// try {
				const res = await axios.post("farmerauth/register", {
					account,
					name,
					password,
					confirmPassword,
					fram_name,
				});
        if(res.data.affectedRows){
          function sweetAlert() {
						Swal.fire({
							title: "註冊成功",
							text: "歡迎來到rowfruit",
							animation: false,
							confirmButtonText: "前往登入",
						}).then(function () {
							// window.location.replace("/farmerlogin");
							history.push("/farmerlogin");
							//  browserHistory.push("");
						});
					}
          sweetAlert();
          

        }else{
          setErrorMsg(res.data.text);
        }
         
        
		
		};

	return (
		<div className="MemberBanner" style={banner}>
			<div className="container ">
				<div className="row justify-content-center mt-5">
					<div className="col-lg-4 col-sm-8 mb-3 my-3">
						<div className="card shadow">
							<div className="MemberCardLogo text-center border-bottom">
								<img className="p-3" src="MemberPhoto/logo.svg" alt="" />
							</div>
							<div className="MemberBody">
								<form onSubmit={handleSubmit}>
									<h3 className="MemberRegister d-flex justify-content-center  mb-3">
										小農會員註冊
									</h3>
									<div className="mb-3">
										<input
											className="form-control"
											type="text"
											name="name"
											placeholder="請輸入姓名"
											onChange={(e) => setName(e.target.value)}
											required
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-control"
											type="text"
											name="account"
											placeholder="請輸入帳號"
											onChange={(e) => setAccount(e.target.value)}
											required
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-control"
											type="password"
											name="confirmPassword"
											placeholder="請輸入密碼"
											onChange={(e) => setPassword(e.target.value)}
											minLength="6"
											required
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-control"
											type="password"
											name="confirmPassword"
											onChange={(e) => setConfirmPassword(e.target.value)}
											minLength="6"
											placeholder="請再次確認密碼"
											required
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-control"
											type="text"
											name="fram_name"
											onChange={(e) => setFram_name(e.target.value)}
											placeholder="果園名稱"
											required
										/>
										{errorMsg && (
											<small className="text-danger form-text">
												{errorMsg}
											</small>
										)}
									</div>
									<div className="d-none d-sm-flex justify-content-center  my-4">
										<button type="submit" className="btn normal-btn">
											送出
										</button>
									</div>
									<div className=" d-sm-none my-4">
										<button type="submit" className="btn rwd-btn">
											送出
										</button>
									</div>
									<div className="d-flex justify-content-center mb-3　text-center">
										<Link className="back-login" to="/farmerlogin">
											<h5 className="back-login">已經有帳號了? 登入</h5>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
