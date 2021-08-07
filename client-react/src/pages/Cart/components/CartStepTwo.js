import React, { useState } from "react";
import ProductTable from "./ProductTable";
function CartStepTwo(props) {
  const{setStep,myCart,totalPrice,transport,setTransport,pay,setPay}=props
  // const [transport, setTransport] = useState("150");
  // const [pay, setPay] = useState("貨到付款");

  return (
    <>
      <div className="row">
        <div className="col-9">
          <ProductTable myCart={myCart} />
        </div>
        <div className="col-3 text-center d-flex flex-column align-items-center">
          <section>
            <h4 className="m-1">選擇付款方式</h4>
            <input
              type="radio"
              value="貨到付款"
              checked={pay === "貨到付款"}
              onChange={(e) => {
                setPay(e.target.value);
              }}
            />
            <label>貨到付款</label>
            <input
              type="radio"
              value="線上刷卡"
              checked={pay === "線上刷卡"}
              onChange={(e) => {
                setPay(e.target.value);
              }}
            />
            <label>線上刷卡</label>
          </section>
          <section>
            <h4 className="m-1">選擇運送方式</h4>
            <input
              type="radio"
              value="150"
              checked={transport === "150"}
              onChange={(e) => {
                setTransport(e.target.value);
              }}
            />
            <label>黑貓宅急便</label>
            <input
              type="radio"
              value="100"
              checked={transport === "100"}
              onChange={(e) => {
                setTransport(e.target.value);
              }}
            />
            <label>7-11超商取貨</label>
          </section>
          <div style={{width:"40%"}}>
            <h4 className="mb-0">價錢計算</h4>
            <div className="d-flex justify-content-between">
              <p className="m-0 text-end">金額</p>
              <p className="m-0">${totalPrice
              }</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="m-0 text-end">運費</p>
              <p className="m-0">${transport}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="m-0 text-end">總金額</p>
              <p className="m-0">${(+transport)+(+totalPrice)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between" style={{width:"75%"}}>
          <div  className="d-flex align-items-center">
              <h2 className="mt-1">商品金額</h2>
              <p className="ps-4 h3">${totalPrice}</p>
          </div>
          <div className="d-flex">
          <span onClick={()=>{setStep(1)}} class="btn normal-btn mx-4 my-3">上一步</span>
          <span onClick={()=>{setStep(3)}} class="btn normal-btn mx-4 my-3">下一步</span>
          </div>
      </div>
    </>
  );
}
export default CartStepTwo;
