import React from "react";

function SubItem(props) {
  const {productId, product_name, subscribe_way, images } = props;
  // 訂閱制時間
  var subboxTime
  var subboxPriceTime
  switch (subscribe_way) {
    case 1:
      subboxTime = "月訂閱制";
      subboxPriceTime = 4;
      break;
    case 3:
      subboxTime = "季訂閱制";
      subboxPriceTime = 4 * 0.9;
      break;
    case 6:
      subboxTime = "半年訂閱制";
      subboxPriceTime = 4 * 0.8;
      break;
    default:
      subboxTime = "";
  }
  // 水果盒價格
  var fruitboxPrice
  switch (productId) {
    case 1:
      fruitboxPrice = 400;
      break;
    case 2:
      fruitboxPrice = 500;
      break;
    case 3:
      fruitboxPrice = 600;
      break;
    default:
      fruitboxPrice = 0;
  }
  // 訂閱制價格
  var subboxPrice = subboxPriceTime * fruitboxPrice
  
  
  return (
    <>
        <tr>
            <th class="cartimg"><img src={images} alt="" /></th>
            <td><span>{product_name}水果盒</span></td>
            <td><span>{subboxTime}</span></td>
            <td><span>${subboxPrice}</span></td>
        </tr> 
</>
  );
}
export default SubItem;
