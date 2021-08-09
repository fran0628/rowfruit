import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

function OrderDetail(props) {
  const { id, create_time, total_price, receiver, orderDetails } = props;

  return (
    <>
      <div className="col-8 mx-auto mt-3">
        <table class="table table-secondary table-striped table-hover ">
          <thead>
            <tr>
              <th><strong>訂單編號</strong></th>
              {/* <th>建立日期</th> */}
              <th><strong>總金額</strong></th>
              <th><strong>購買人</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> NO{id}</th>
              {/* <td> {create_time}</td> */}
              <th> ${total_price}</th>
              <th> {receiver}</th>
            </tr>
            <tr>
              <td colspan="4" className="p-0 mb-0">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>訂單明細</strong></Accordion.Header>
                    <Accordion.Body className="p-0 ">
                      <table class="table  table-secondary table-striped">
                        <thead>
                          <tr>
                            <th></th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>商品金額</th>
                            <th>內容</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderDetails.map(
                            ({
                              images,
                              product_name,
                              product_id,
                              content,
                              count,
                              price,
                            }) => (
                              <tr>
                                <td><div className="figure"><img style={{width:"100px"}} src={images} className="card-img-top" alt="..." /></div></td>
                                <td>{product_name}水果盒</td>
                                <td>{count}</td>
                                <td>${price}</td>
                                <td>{content}</td>
                              </tr>
                            )
                          )}
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
export default OrderDetail;
