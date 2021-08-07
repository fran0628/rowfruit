import React from 'react'
import { useLocation, Link } from "react-router-dom";
import './userdashboardaside.scss'


function UserDashboardAside() {
     const location = useLocation();
			console.log(location);
			const path = location.pathname.split("/")[1];
			console.log(path);
    return (
			<>
				<aside class="position-sticky main-menu border-right h-100 mw-100">
					<nav className="position-sticky ">
						<h3 class="text-muted sub-titile text-center ">會員中心</h3>
						<ul class="list-unstyled text-center">
							<li>
								<Link to="/memberdashboard">
									<h5 className={path === "memberdashboard" ? "active" : ""}>
										會員資料
									</h5>
								</Link>
							</li>
							<li>
								<Link to="/changepassword">
									<h5 className={path === "changepassword" ? "active" : ""}>
										修改密碼
									</h5>
								</Link>
							</li>
							<li>
								<Link to="/orderlist">
									<h5 className={path === "orderlist" ? "active" : ""}>
										訂單管理
									</h5>
								</Link>
							</li>
						</ul>
					</nav>
				</aside>
			</>
		);
}
export default UserDashboardAside;