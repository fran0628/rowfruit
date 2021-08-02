import { Link,useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Swal from "sweetalert2";

const banner = {
	backgroundImage: `url(${"MemberPhoto/banner.png"})`,
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
	backgroundSize: "cover",
};

export default function FarmerLogin() {
	const history = useHistory()
	const accountRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
	
		try {
			const res = await axios.post("/farmerauth/login", {
				account: accountRef.current.value,
				password: passwordRef.current.value,
			});
			console.log(res.data)
			

			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			 function sweetAlert() {
					Swal.fire({
						icons: "success",
						title: "登入成功",
						text: `Hi!${res.data.name}，歡迎來到rowfruit`,
						animation: true,
						confirmButtonText: "關閉",
					}).then(function () {
						// window.location.replace("/");
						history.push("/");
					});
				}
				sweetAlert();

			
		} catch (err) {
			function sweetAlert() {
				Swal.fire({
					title: "登入失敗",
					text: "請重新登入",
					animation: true,
					confirmButtonText: "關閉",
				})
			}
			sweetAlert();
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};

	return (
		<div>
			<div className="MemberBanner" style={banner}>
				{/* Login  Form */}
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-8 my-3">
							<div className="card shadow">
								<div className="MemberCardLogo text-center border-bottom">
									{/* ROWFRUIT*/}
									<img className="logo p-3" src="MemberPhoto/logo.svg" alt="" />
								</div>
								<div className="MemberBody">
									<h3 className="NormalMemberLogin d-flex justify-content-center mb-3">
										小農會員登入
									</h3>
									<form onSubmit={handleSubmit}>
										<div className="mb-3">
											<label htmlFor="username" className="form-label">
												帳號
											</label>
											<input
												className="form-control"
												type="text"
												name="account"
												placeholder="請輸入您的帳號"
												ref={accountRef}
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
												ref={passwordRef}
												placeholder="請輸入您的密碼"
												required
											/>
										</div>
										<div className="mb-3">
											<input
												type="checkbox"
												className="form-check-input"
												id="remember"
											/>
											<label htmlFor="remember">Remeber Me</label>
										</div>
										<div className="d-none d-sm-flex justify-content-center">
											<button
												type="submit"
												className="btn normal-btn"
												disabled={isFetching}
											>
												登入
											</button>
										</div>
										<div className=" d-sm-none my-2">
											<button
												type="submit"
												className="btn rwd-btn"
												disabled={isFetching}
											>
												登入
											</button>
										</div>
										<div className="d-flex justify-content-center mt-3">
											<label className="sign-up mx-4">
												<Link className="MemberSignup" to="/farmerregister">
													立即註冊
												</Link>
											</label>
											<label className>|</label>
											<label className="ForgotPWD mx-4">
												<a href="member_forgotpassword.html">忘記密碼</a>
											</label>
										</div>

										<div className="d-flex justify-content-center mb-2">
											<Link className="back-farmerlogin" to="/login">
												<h5 className="BackFarmerlogin">
													切換至一般會員登入頁面
												</h5>
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
