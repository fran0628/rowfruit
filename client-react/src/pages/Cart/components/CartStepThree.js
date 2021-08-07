import React, { useState } from "react";
import ProductTable from "./ProductTable";
function CartStepThree(props) {
  const { setStep, myCart, totalPrice, transport } = props;
  const [agree, setAgree] = useState(false);
  const [receiver, setReceiver] = useState("");
  function nameChange(e) {
    setReceiver(e.target.value);
  }
  const [phone, setPhone] = useState();
  function phoneChange(e) {
    setPhone(e.target.value);
  }
  const [address, setAddress] = useState("");
  function addressChange(e) {
    setAddress(e.target.value);
  }
  return (
    <>
      <ProductTable myCart={myCart} />
      <div className="d-flex justify-content-around">
        <div className="d-flex">
          <p className="pe-3">運費</p>
          <p>${transport}</p>
          <p className="pe-3">,折扣</p>
          <p>$0</p>
        </div>
        <div className="d-flex">
          <p className="pe-3">付款資料</p>
          <p>${totalPrice}</p>
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
            <p className="h5">${+totalPrice + +transport}</p>
          </div>
        </div>
      </div>
      <div className="inputArea">
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <div>帳號</div>
          </div>
          <div className="col-7">
            <p className="m-0">王阿明</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <p className="m-0">運送方式</p>
          </div>
          <div className="col-7">
            {+transport === 150 ? (
              <p className="m-0">黑貓宅急便</p>
            ) : (
              <p className="m-0">7-11超商取貨</p>
            )}
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end align-items-center">
            <input
              id="keyIN"
              type="checkbox"
              checked={agree}
              onChange={(event) => {
                setAgree(event.target.checked);
                // setReceiver(userData.name);
                // setPhone(userData.phone);
                // setAddress(userData.address);
              }}
            />
          </div>
          <div className="col-7">
            <label for="keyIN">一鍵輸入</label>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="receiver">收件人</label>
          </div>
          <div className="col-7">
            <input
              id="receiver"
              placeholder="輸入您的收件人姓名"
              onChange={nameChange}
              value={receiver}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="phone">電話</label>
          </div>
          <div className="col-7">
            <input
              id="phone"
              placeholder="輸入收件人電話"
              onChange={phoneChange}
              value={phone}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="address">地址</label>
          </div>
          <div className="col-7">
            <input
              style={{ width: "500px" }}
              id="address"
              placeholder="輸入收件人地址"
              value={address}
              onChange={addressChange}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-5 d-flex justify-content-end">
            <label for="remark">備註</label>
          </div>
          <div className="col-7">
            <textarea style={{ width: "500px" }} id="remark" placeholder="有任何想告訴我們的東西" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <span
          onClick={() => {
            setStep(2);
          }}
          class="btn normal-btn mx-4 my-3"
        >
          上一步
        </span>
        <span
          onClick={() => {
            setStep(4);
          }}
          class="btn normal-btn mx-4 my-3"
        >
          送出
        </span>
      </div>
    </>
  );
}
export default CartStepThree;
