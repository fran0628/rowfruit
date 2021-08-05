import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import axios from "axios";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart({ setCartUpdate, isLogin }) {
  //初始化會員資料
  const [userData, setUserData] = useState({
    id: "",
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
  console.log("order", order);
  console.log("userData.id", userData.id);
  console.log("order.memberId", order.memberId);
  //拿到localStorage資料放進mycart
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
  //設定sweetalert
  function successAdd() {
    Swal.fire({
      title: "感謝您的購買",
      confirmButtonText: "查看明細",
      cancelButtonText: "關閉",
      showCancelButton: true,
      showCloseButton: true,
    });
  }
  //加成功跳出sweetalert
  useEffect(() => {
    if (start) {
      successAdd();
    }
  }, [myCart, start]);
  //綁定input能夠取得值
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
  //計算總價
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
      sum += myCart[i].price;
    }
    return sum;
  };
  //送出會發生的事情
  function setOrderAndSubmit() {
    //TopNav的開關
    setCartUpdate(true);
    //useEffect  fetchPost開關
    setStart(true);
    //更新order資料
    setOrder((prev) => {
      const newOrder = { ...prev };
      newOrder.receiver = receiver;
      newOrder.phone = phone;
      newOrder.address = address;
      newOrder.items = myCart;
      newOrder.totalPrice = orderPrice;
      return newOrder;
    });
    //清空本地用來渲染的資料
    setMyCart([]);
    //清掉localStorage
    localStorage.removeItem("cart");
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
  //如果有start order改變就fetchPost
  useEffect(() => {
    if (start) {
      fetchPostApi();
      setReceiver("");
      setPhone("");
      setAddress("");
      setAgree(false);
    }
  }, [order, start]);
  //checkbox設定
  const [agree, setAgree] = useState(false);
  const [transport, setTransport] = useState("150");
  const orderPrice = +transport+(+totalPrice())
 
  return (
    <>
      <MultiLevelBreadcrumb />
      <div className="col-8 mx-auto mt-3">
        <h3 className="">購物車清單</h3>
        <div className="row">
          <table className="table table-success table-striped table-hover container">
            <thead>
              <tr>
                <th>商品圖片</th>
                <th>商品名稱</th>
                <th>商品內容</th>
                <th>商品價格</th>
                <th>商品數量</th>
                <th>商品小計</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myCart.map((item, index) => {
                const {
                  productId,
                  productName,
                  count,
                  content,
                  price,
                  imageUrl,
                } = item;
                return (
                  <Item
                    key={v4()}
                    productId={productId}
                    productName={productName}
                    count={count}
                    content={content}
                    price={price}
                    imageUrl={imageUrl}
                    myCart={myCart}
                    setMyCart={setMyCart}
                    setCartUpdate={setCartUpdate}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center">
            <section id="radio">
              <h3>選擇運送方式</h3>
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
            <div>
              <p className="fs-4">運費</p>
              <div className="text-center">{transport}</div>

            </div>
            <i class="fas fa-plus"></i>
            <div>
              <p className="fs-4">商品總價</p>
              <div className="text-center">${totalPrice()}</div>
            </div>
            <i class="fas fa-equals"></i>
            <div>
              <p className="fs-4">總價</p>
              <div className="text-center">${orderPrice}</div>
            </div>
          </div>
          {isLogin.islogin ? (
            <>
              <div className="d-flex justify-content-center align-items-center">
                <h3 className="text-center pe-5">訂購人資訊</h3>
                <section id="checkbox">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(event) => {
                      setAgree(event.target.checked);
                      setReceiver(userData.name);
                      setPhone(userData.phone);
                      setAddress(userData.address);
                    }}
                  />
                  <lable>一鍵輸入</lable>
                </section>
              </div>

              <div class="container">
                <div class="row mb-3">
                  <label for="receiverName" class="col-sm-2 col-form-label">
                    購買姓名
                  </label>
                  <div class="col-sm-10">
                    <input
                      class="form-control"
                      id="receiverName"
                      placeholder="輸入您的收件人姓名"
                      onChange={nameChange}
                      value={receiver}
                    ></input>
                  </div>
                  <label
                    for="receiverPhone"
                    class="col-sm-2 col-form-label mt-3"
                  >
                    連絡電話
                  </label>
                  <div class="col-sm-10 mt-3">
                    <input
                      class="form-control"
                      id="receiverPhone"
                      placeholder="輸入收件人電話"
                      onChange={phoneChange}
                      value={phone}
                    ></input>
                  </div>
                  <label
                    for="receiverAddress"
                    class="col-sm-2 col-form-label mt-3"
                  >
                    寄送地址
                  </label>
                  <div class="col-sm-10 mt-3">
                    <input
                      class="form-control"
                      id="receiverAddress"
                      placeholder="輸入收件人地址"
                      value={address}
                      onChange={addressChange}
                    ></input>
                  </div>
                  {myCart.length === 0 ? (
                    <button disabled>購物車內尚未有商品</button>
                  ) : (
                    <button
                      type=""
                      class="btn btn-success container-fluid mt-3"
                      onClick={setOrderAndSubmit}
                    >
                      確認並送出訂單
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <Link to="/memberlogin">
                <button className="btn">請先登入</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default withRouter(Cart);
