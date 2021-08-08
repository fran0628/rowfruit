import React, { useState } from "react";

function SubDetail(props) {
  const {setStep, productId, subscribe_way, userData} = props;
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
  var totalPrice = subboxPrice + 150

  
  return (
    <>
        <div class="checkoutdetail p-3">
            <span class="subpaydetail">訂單明細</span>
            <hr />
            <div class="d-flex justify-content-between">
            <span class="subpayinfodetail">訂購人</span>
            <span>{userData.name}</span>
            </div>
            <div class="d-flex justify-content-between">
            <div class="my-3">
                <span class="subpayinfodetail">寄送方式</span>
            </div>
            <div class="my-3">
                <span>黑貓宅急便</span>
            </div>
            </div>
            <div class="d-flex justify-content-between">
            <span class="subpayinfodetail">訂單總額</span>
            <span class="text-danger">${totalPrice}</span>
            </div>
            <div class="submit text-end">
              <button class="subpaybuy-btn mt-3" onClick={()=>{setStep(4)}}>送出訂單</button>
            </div>   
        </div>
    </>
  );
}
export default SubDetail;