import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import OrderDetail from "./OrderDetail/OrderDetail";
import axios from "axios";

function Order(props) {
  const { id, create_time, total_price, member_id, product_id, amount } = props;

	const [data, setData] = useState([]);
  useEffect(() => {
    const fetchOrderDetail = async () => {
      const res = await axios.get("/Cart/Orderlist");
      console.log(res);
      console.log(res.data);
      setData(res.data);
    };
    fetchOrderDetail();
  }, []);

  return (
    <>
      <div className="col-8 mx-auto mt-3">
        <table class="table table-success table-striped table-hover ">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>建立日期</th>
              <th>總金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{create_time}</td>
              <td>{total_price}</td>
            </tr>
            <tr>
              <td colspan="3" className="p-0 mb-0">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>訂單明細</Accordion.Header>
                    <Accordion.Body className="p-0 ">
                      <table class="table table-success table-striped">
                        <thead>
                          <tr>
                            <th>訂單編號</th>
                            <th>購買人</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                          </tr>
                        </thead>
                        <tbody>
                          <OrderDetail />
                        </tbody>
                      </table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Order;
