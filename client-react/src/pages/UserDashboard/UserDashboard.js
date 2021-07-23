import React from 'react'
import './userdashboard.scss'

function UserDashboard() {
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
								readOnly
							/>
						</div>
						<div className="col-md-6">
							<label for="inputPassword4" className="form-label">
								姓名
							</label>
							<input type="text" className="form-control" id="inputPassword4" />
						</div>
						<div className="col-md-6">
							<label for="inputPassword" className="form-label">
								密碼
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
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
							/>
						</div>
						<div className="col-4">
							<label for="inputPhone" className="form-label">
								電話
							</label>
							<input type="tel" className="form-control" id="inputPhone" />
						</div>
						<div className="col-8">
							<label for="inputAddress" className="form-label">
								地址
							</label>
							<input type="text" className="form-control" id="inputAddress" />
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
export default UserDashboard;