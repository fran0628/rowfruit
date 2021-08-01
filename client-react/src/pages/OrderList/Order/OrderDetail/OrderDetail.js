import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderDetail(props) {
  const { id, create_time, total_price, member_id, product_id, amount } = props;
  
//   axios.get("/Orderlist").then((res)=>{
//     console.log(res.data);
// });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchOrderDetail = async () => {
      const res = await axios.get("/Orderlist");
      console.log(res);
      console.log(res.data);
      setData(res.data);
    };
    fetchOrderDetail();
  }, []);
 console.log(data);
  
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{member_id}</td>
        <td>{product_id}</td>
        <td>{amount}</td>
      </tr>
    </>
  );
}
export default OrderDetail;
