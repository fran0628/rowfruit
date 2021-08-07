import React from "react";
import { Link } from "react-router-dom";

function SubFour(props) {
  const{setStep, subCart}=props

  return (
    <>
       <div class="container">
            <div class="mt-5 text-center">
                <i class="far fa-check-circle fa-3x"></i><br/>
            </div>
            <div class="text-center mt-5 ms-3">
                <span class="successbuy fs-5">您的訂單代碼為：</span><br/>
            </div>
            <div class="text-center mt-4">
                <span class="successbuy fs-5">qr147352</span><br/>
                <div class="mt-4">
                    <span class="successbuy fs-5">恭喜您已完成訂購，感謝您的購買</span><br/>
                </div>
            </div>
            <div class="text-center my-5">
            <Link to="/"><button class="btn subpaysuccess-btn">返回首頁</button></Link>
            <Link to="/orderlist"><button class="btn subpaysuccess-btn">查看訂單明細</button></Link>
            </div>
        </div>
     
    </>
  );
}
export default SubFour;
