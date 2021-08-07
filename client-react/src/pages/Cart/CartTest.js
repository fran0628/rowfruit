import React, { useState,useEffect } from "react";
import "./Cart.scss";
import axios from "axios";
import CartStepOne from "./components/CartStepOne";
import CartStepTwo from "./components/CartStepTwo";
import CartStepThree from "./components/CartStepThree"
import CartStepFour from "./components/CartStepFour"

export default function CartTest(props) {
  //從app.js拿到設定nav開關與判斷登入狀態
  const {setCartUpdate,isLogin}=props
  //初始化在第一步驟
  const [step, setStep] = useState(1);
  //初始化會員資料
  const [userData, setUserData] = useState({
    id: "",
    account:"",
    name: "",
    phone: "",
    address: "",
  });

  //解析token拿到會員資料丟進userData和order
  async function getUserDetail() {
    const token = localStorage.getItem("token").split(" ")[1];

    let payload = JSON.parse(atob(token.split(".")[1]));
    let res = await axios.get("http://localhost:5000/api/member/" + payload.id);
    const data = res.data[0];
    setUserData({
      id: data.id,
      account:data.account,
      name: data.name,
      phone: data.phone,
      address: data.address,
    });
    setOrder({
      memberId: data.id,
      totalPrice: 0,
      address: "",
      receiver: "",
      phone: "",
      items: [
        {
          productId: 0,
          count: 1,
          price: 0,
          content: "",
        },
      ],
    });
  }
  //設定本地資料
  const [myCart, setMyCart] = useState([]);
  //送出開關 資料清空所需要
  const [start, setStart] = useState(false);
  //post出去資料格式初始化與設定

  const [order, setOrder] = useState({
    memberId: 0,
    totalPrice: 0,
    address: "",
    receiver: "",
    phone: "",
    items: [
      {
        productId: 0,
        count: 1,
        price: 0,
        content: "",
      },
    ],
  });
  //計算總價
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
      sum += myCart[i].price;
    }
    return sum;
  };



    //拿到localStorage資料放進myCart
    function getCartFromLocalStorage() {
      const newCart = localStorage.getItem("cart") || "[]";
      setMyCart(JSON.parse(newCart));
    }
    //一開始就把資料丟進去myCart跟userData
    useEffect(() => {
      getCartFromLocalStorage();
      if (isLogin.islogin) {
        getUserDetail();
      }
    }, []);

    const [transport, setTransport] = useState("150");
  return (
    <div className="container position-relative">
      <div className="fullLine"></div>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "200px" }}
      >
        <div className="d-flex flex-column align-items-center">
          {step === 1 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              1
            </div>
          ) : (
            <div className="step">1</div>
          )}

          <p className="m-0">Check Order</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 2 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              2
            </div>
          ) : (
            <div className="step">2</div>
          )}
          <p className="m-0">Choose Payment Method</p>
          <p className="m-0">選擇付款方式</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 3 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              3
            </div>
          ) : (
            <div className="step">3</div>
          )}
          <p className="m-0">Fill The Add</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 4 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              4
            </div>
          ) : (
            <div className="step">4</div>
          )}
          <p className="m-0">Shopping Completed</p>
          <p className="m-0">購買完成</p>
        </div>
      </div>

      {step === 1 && <CartStepOne setStep={setStep} myCart={myCart}  />}
      {step === 2 && <CartStepTwo setStep={setStep} myCart={myCart} totalPrice={totalPrice()} transport={transport} setTransport={setTransport}  />}
      {step === 3 && <CartStepThree setStep={setStep} myCart={myCart} totalPrice={totalPrice()} transport={transport} />}
      {step === 4 && <CartStepFour setStep={setStep} myCart={myCart} />}

     
    </div>
  );
}
