import React, { useEffect, useState } from "react";
import "./orderlist.scss";
import OrderDetail from "./Orderdetail/OrderDetail";
import './orderlist.scss'
import axios from "axios";
import UserDashboardAside from "../../component/UserDashboardAside.js/UserDashboardAside";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";

function OrderList() {
  const [order, setOrder] = useState([]);

  const Fetchdata = async () => {
    const token = localStorage.getItem("token").split(" ")[1];
    const { id: memberId } = JSON.parse(atob(token.split(".")[1]));

    const res = await axios.get("http://localhost:5000/api/orderlist");
    const tmp = {};
    for (const {
      id,
      receiver,
      price,
      create_time,
      content,
      phone,
      name,
      product_id,
      total_price,
      address,
	    images,
      product_name,
      member_id,
      count,
    } of res.data) {
      if (member_id !== memberId) continue;
      tmp[id] = tmp[id] || {
        id,
        receiver,
        create_time,
        phone,
        address,
        name,
        total_price,
        orderDetails: [],
      };

      tmp[id].orderDetails.push({
		    images,
        product_name,
        product_id,
        content,
        count,
        price,
      });
    }
    setOrder(Object.values(tmp));
    console.log(res.data);
  };

  useEffect(() => {
    Fetchdata();
  }, []);

  return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-3 col-lg-2 position-relative p-0 abjust-mb">
						<UserDashboardAside />
					</div>
					<div className="col-9 col-lg-10">
            <MultiLevelBreadcrumb/>
						<h3 className="text-center"><strong>一般訂單資訊</strong></h3>
						<div className="container">
							<div className="row">
								{order.map((item) => {
									const {
										id,
                    address,
										create_time,
										total_price,
										receiver,
										orderDetails,
									} = item;
									return (
										<OrderDetail
											id={id}
											create_time={create_time}
											total_price={total_price}
											address={address}
											receiver={receiver}
											orderDetails={orderDetails}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default OrderList;
