import React, { useEffect, useState } from "react";
import "./orderlist.scss";

import axios from "axios";
import { Accordion } from "react-bootstrap";

function OrderList() {
  const [order, setOrder] = useState([]);

  const Fetchdata = async () => {
    
	const token = localStorage.getItem('token').split(" ")[1]
	const { id: memberId } = JSON.parse(atob(token.split(".")[1]));

    const res = await axios.get("http://localhost:5000/api/orderlist");
    const tmp = {};
    for (const {
      id,
      receiver,
      amount,
      create_time,
      content,
      phone,
      name,
      product_id,
      total_price,
      product_name,
	  member_id,
      qty,
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
        product_name,
        product_id,
        content,
        qty,
        amount,
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
          <div className="col-8 mx-auto mt-3">
            <table class="table table-success table-striped table-hover ">
              <thead>
                <tr>
                  <th>訂單編號</th>
                  <th>建立日期</th>
                  <th>總金額</th>
                  <th>購買人</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item) => {
                  const {
                    id,
                    create_time,
                    total_price,
                    receiver,
                    orderDetails,
                  } = item;
                  return (
                    <>
                      <tr>
                        <td> NO{id}</td>
                        <td> {create_time}</td>
                        <td> ${total_price}</td>
                        <td> {receiver}</td>
                      </tr>
                      <tr>
                        <td colspan="4" className="p-0 mb-0">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Header>訂單明細</Accordion.Header>
                            <Accordion.Body className="p-0 ">
                              <table class="table table-success table-striped">
                                <thead>
                                  <tr>
                                    <th>商品名稱</th>
                                    <th>數量</th>
                                    <th>商品金額</th>
                                    <th>內容</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orderDetails.map(
                                    ({
                                      product_name,
                                      product_id,
                                      content,
                                      qty,
                                      amount,
                                    }) => (
                                      <tr>
                                        <td>{product_name}水果盒</td>
                                        <td>{qty}</td>
                                        <td>${amount}</td>
                                        <td>{content}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </Accordion.Body>
                          </Accordion>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderList;
