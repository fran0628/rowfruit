import React from 'react'
import { useLocation, Link } from "react-router-dom";

function DashboardAside() {
    const location = useLocation();
		console.log(location);
		const path = location.pathname.split("/")[1];
		console.log(path);
        // console.log(location.pathname)
    return (
			<>
				<aside class="position-sticky main-menu border-right h-100 mw-100">
					<nav className="position-sticky ">
						<h3 class="text-muted sub-titile text-center ">小農會員中心</h3>
						<ul class="list-unstyled text-center">
							<li>
								<Link to="/farmeruserdashboard">
									<h5
										className={path === "farmeruserdashboard" ? "active" : ""}
									>
										會員資料
									</h5>
								</Link>
							</li>
							<li>
								<Link to="/writepage">
									<h5 className={path === "writepage" ? "active" : ""}>
										發表文章
									</h5>
								</Link>
							</li>
							<li>
								<Link to="/postlist">
									<h5 className={path === "postlist" ? "active" : ""}>
										文章管理
									</h5>
								</Link>
							</li>
						</ul>
					</nav>
				</aside>
			</>
		);
}
export default DashboardAside;