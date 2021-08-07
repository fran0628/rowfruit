import React from "react";
import ProductTable from "./ProductTable";
function CartStepThree(props) {
    const{setStep}=props
  return (
    <>
      <ProductTable />
      <div className="d-flex justify-content-around">
        <div className="d-flex">
          <p className="pe-3">運費</p>
          <p>$100</p>
          <p className="pe-3">,折扣</p>
          <p>$0</p>
        </div>
        <div className="d-flex">
          <p className="pe-3">付款資料</p>
          <p>$1300</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex">
            <p className="pe-4 h5">付款方式</p>
            <p className="h5">貨到付款</p>
          </div>
          <div className="d-flex">
            <p className="pe-4 h5">應付金額</p>
            <p className="h5">$1400</p>
          </div>
        </div>
      </div>
      <div className="inputArea">
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="account">帳號</label>
          </div>
          <div className="col-7">
            <input id="account" />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <p className="m-0">運送方式</p>
          </div>
          <div className="col-7">
            <p className="m-0">黑貓宅急便</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="receiver">收件人</label>
          </div>
          <div className="col-7">
             <input id="receiver" />  
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="phone">電話</label>
          </div>
          <div className="col-7">
             <input id="phone" />  
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="address">地址</label>
          </div>
          <div className="col-7">
             <input style={{width:"500px"}} id="address" />  
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="remark">備註</label>
          </div>
          <div className="col-7">
             <textarea style={{width:"500px"}} id="remark" />  
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <span onClick={()=>{setStep(2)}} class="btn normal-btn mx-4 my-3">上一步</span>
      <span onClick={()=>{setStep(4)}} class="btn normal-btn mx-4 my-3">送出</span>
      </div>
    </>
  );
}
export default CartStepThree;
