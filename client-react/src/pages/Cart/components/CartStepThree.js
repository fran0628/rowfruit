import React, { useState,useEffect } from "react";
import ProductTable from "./ProductTable";
import Swal from "sweetalert2";

function CartStepThree(props) {
  const { setStep, myCart, totalPrice, transport,userData,pay,setOrder,setCartUpdate,setMyCart,order } = props;

  const [send,setSend]=useState(false)
  const [agree, setAgree] = useState(false);
  const [receiver, setReceiver] = useState("");
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  function nameChange(e) {
    setReceiver(e.target.value);
  }
  const [phone, setPhone] = useState("");
  function phoneChange(e) {
    setPhone(e.target.value);
  }
  const [address, setAddress] = useState("");
  function addressChange(e) {
    setAddress(e.target.value);
  }
  function setOrderAndSubmit (){
     if(receiver===""){
      Swal.fire({
        title: "收件人未填入",
        timer: 1500,
      })
      document.getElementById("receiver").focus()
     }else if(phone===""){
      Swal.fire({
        title: "電話未填入",
        timer: 1500,
      })
      document.getElementById("phone").focus()
     }else if(address===""){
      Swal.fire({
        title: "地址未填入",
        timer: 1500,
      })
      document.getElementById("address").focus()
     }else{
      setCartUpdate(true)
    setSend(true)
    setOrder((prev) => {
      const newOrder = { ...prev };
      newOrder.receiver = receiver;
      newOrder.phone = phone;
      newOrder.address = address;
      newOrder.items = myCart;
      newOrder.totalPrice = (+totalPrice)+(+transport)
      return newOrder;
    })
     //清空本地用來渲染的資料
     setMyCart([]);
     //清掉localStorage
     localStorage.removeItem("cart");
     }
  }
  //設定sweetalert
  function successAdd() {
    Swal.fire({
      title: "感謝您的購買",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      timer: 1500,
    });
  }
  //fetchPost方法
  const fetchPostApi = async () => {
    await fetch("http://localhost:5000/api/Orderlist", {
      method: "POST",
      body: JSON.stringify(order),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };
  console.log(order)
  useEffect(() => {
    if (send) {
      fetchPostApi();
      successAdd();
      setReceiver("");
      setPhone("");
      setAddress("");
      setTimeout(() => {
        setStep(4)
      }, 2000);
    }
  }, [order, send]);

  return (
    <>
      <ProductTable myCart={myCart} setMyCart={setMyCart} setCartUpdate={setCartUpdate} />
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
            <p className="h5">{pay}</p>
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
            <p className="m-0">{userData.account}</p>
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
                setReceiver(userData.name);
                setPhone(userData.phone);
                setAddress(userData.address);
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
              className="inputStyle"
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
              className="inputStyle"
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
              className="inputStyle"
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
            <textarea className="inputStyle" style={{ width: "500px" }} id="remark" placeholder="有任何想告訴我們的東西" />
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
          onClick={setOrderAndSubmit}
          class="btn normal-btn mx-4 my-3"
        >
          送出
        </span>
      </div>
    </>
  );
}
export default CartStepThree;
