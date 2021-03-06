import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MemberLogin.scss";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";


const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function MemberLogin(props) {
  const { data, setData, setShowdata } = props;

  const [account, setAccount] = useState("");

  function accountChange(e) {
    setAccount(e.target.value);
  }

  const [password, setPassword] = useState("");

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function loginSubmit() {
    setShowdata(true);
    setData(() => {
      const newData = { ...data };
      newData.account = account;
      newData.password = password;
      return newData;
    });
    // console.log("loginSubmit :", loginSubmit)
  }

  return (
		<div>
			<MultiLevelBreadcrumb />
			<div className="MemberBanner" style={banner}>
				{/* Login  Form */}
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-8 my-3">
							<div className="card shadow">
								<div className="MemberCardLogo text-center border-bottom">
									{/* ROWFRUIT*/}
									<img className="pt-3" src="MemberPhoto/logo.png" alt="" />
								</div>
								<div className="MemberBody">
									<h3 className="NormalMemberLogin d-flex justify-content-center mb-3">
										一般會員登入
									</h3>
									<form>
										<div className="mb-3">
											<label htmlFor="username" className="form-label">
												帳號
											</label>
											<input
												className="form-control"
												type="text"
												name="account"
												value={account}
												placeholder="請輸入您的帳號"
												onChange={accountChange}
												required
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="password" className="form-label">
												密碼
											</label>
											<input
												className="form-control"
												type="password"
												name="password"
												placeholder="請輸入您的密碼"
												value={password}
												onChange={passwordChange}
												minLength="6"
												maxLength="12"
												required
											/>
										</div>
										<div className="mb-3">
											<input
												type="checkbox"
												className="form-check-input"
												id="remember"
											/>
											<label htmlFor="remember">記住使用者帳號</label>
										</div>
										<div className="d-none d-sm-flex justify-content-center">
											<button
												type="button"
												className="btn normal-btn"
												onClick={loginSubmit}
											>
												登入
											</button>
										</div>
										<div className=" d-sm-none my-2">
											<button type="button" className="btn rwd-btn">
												登入
											</button>
										</div>
										<div className="d-flex justify-content-center mt-3">
											<label className="sign-up mx-4">
												<a className="MemberSignup" href="memberegister">
													立即註冊
												</a>
											</label>
											<label className>|</label>
											<label className="ForgotPWD mx-4">
												<a href="member_forgotpassword.html">忘記密碼</a>
											</label>
										</div>
										<div className="d-flex justify-content-center mb-2">
											<Link className="back-farmerlogin" to="/farmerlogin">
												<h5 className="BackFarmerlogin">切換為小農登入頁面</h5>
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  
}
export default MemberLogin;
