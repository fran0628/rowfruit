import React, { useEffect, useState } from "react";
import "./orderlist.scss";
import SubscribeOrderDetail from "./SubscribeOrderdetail/SubscribeOrderdetail";

import axios from "axios";
import UserDashboardAside from "../../component/UserDashboardAside.js/UserDashboardAside";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";

function SubscribeOrderList() {
  const [order, setOrder] = useState([]);

  const Fetchdata = async () => {
    const token = localStorage.getItem("token").split(" ")[1];
    const { id: memberId } = JSON.parse(atob(token.split(".")[1]));

    const res = await axios.get("http://localhost:5000/api/SuscribeOrderlist");
    const tmp = {};
    for (const {
      id,
      receiver,
      price,
      start_time,
      content,
      phone,
      name,
      product_id,
      total_price,
      address,
	    images,
      product_name,
      subscribe_way,
      user_id,
      discount,
      count,
      way,
      fruit_item,
    } of res.data) {
      if (user_id !== memberId) continue;
      tmp[id] = tmp[id] || {
        id,
        receiver,
        start_time,
        phone,
        address,
        name,
        
        price,
        subscribe_way,
        user_id,
        discount,
        way,
        
        
        
        orderDetails: [],
      };

      tmp[id].orderDetails.push({
        price,
		    images,
        product_name,
        product_id,
        fruit_item,
        way,
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
						<h3 className="text-center"><strong>訂閱制訂單資訊</strong></h3>
						<div className="container">
							<div className="row">
								{order.map((item) => {
									const {
										id,
                    address,
										start_time,
										price,
										receiver,
										orderDetails,
                    discount,
                    way,
                    fruit_item,
									} = item;
									return (
										<SubscribeOrderDetail
											id={id}
											start_time={start_time}
											price={price}
											address={address}
											receiver={receiver}
                      discount={discount}
                      way={way}
                      fruit_item={fruit_item}

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
export default SubscribeOrderList;
