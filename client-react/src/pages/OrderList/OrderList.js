import React, { useEffect, useState } from "react";
import "./orderlist.scss";
import OrderDetailtop from "./Orderdetail/OrderDetail";
import './orderlist.scss'
import axios from "axios";

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
      <h3 className="text-center">訂單資訊</h3>
      <div className="container">
        <div className="row">
          {order.map((item) => {
            const { id, create_time, total_price, receiver, orderDetails } =
              item;
            return (
              <OrderDetailtop
                id={id}
                create_time={create_time}
                total_price={total_price}
                receiver={receiver}
                orderDetails={orderDetails}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default OrderList;
