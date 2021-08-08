import React from "react";
import Swal from "sweetalert2";

function SubCheck(props) {
  const {setStep, productId, subscribe_way, transport, receiver, phone, address , subOrder, setSubOrder} = props;

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
  // 訂單總額
  var totalPrice = subboxPrice + parseInt(transport)

  const transway = transport.split(",")

  function pay () {
    if(receiver === ""){
      Swal.fire({
        title: "請填寫收貨人名字",
        timer: 1500,
      })
    }else if(phone === ""){
      Swal.fire({
        title: "請填寫手機號碼",
        timer: 1500,
      })
    }else if(address === ""){
      Swal.fire({
        title: "請填寫地址",
        timer: 1500,
      })
    }else{
      setSubOrder((prev) => {
        const newOrder = { ...prev };
        newOrder.product_id = productId;
        newOrder.subscribe_way = subscribe_way;
        newOrder.receiver = receiver;
        newOrder.phone = phone;
        newOrder.address = address;
        return newOrder;
      })
      setStep(2) 
    }
  }

  
  return (
    <>
        <div class="checkoutdetail p-3">
            <span class="subpaydetail">訂單摘要</span>
            <hr />
            <div class="d-flex justify-content-between">
            <span class="subpayinfodetail">商品總額</span>
            <span>${subboxPrice}</span>
            </div>
            <div class="d-flex justify-content-between">
            <div class="my-3">
                <span class="subpayinfodetail">運費</span>
            </div>
            <div class="my-3">
                <span>${transway[0]}</span>
            </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
            <span class="subpayinfodetail">訂單總額</span>
            <span class="text-danger">${totalPrice}</span>
            </div>
            <div class="submit text-end">
              <button class="subpaybuy-btn mt-3" onClick={pay}>立即付款</button>
            </div>   
        </div>
    </>
  );
}
export default SubCheck;
