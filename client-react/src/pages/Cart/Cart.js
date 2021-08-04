import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";
function Cart() {
  const [myCart, setMyCart] = useState([]);
  console.log(myCart);
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
      sum += myCart[i].price;
    }
    return sum;
  };
 
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";
    // console.log("JSON.parse(newCart)", JSON.parse(newCart));
    setMyCart(JSON.parse(newCart));
  }

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
  const [start, setStart] = useState(false);
  const [order, setOrder] = useState({
    memberId: 110,
    totalPrice: 0,
    address: "",
    receiver: "",
    phone: "",
    items: [
      {
        productId: 0,
        count: 1,
        price: 0,
        amount: "",
      },
    ],
  });
  console.log(order);
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
  //   console.log(`收件人${receiver},電話${phone},地址${address}`)

  function setOrderAndSubmit() {
	setStart(true)
    setOrder((prev) => {
      const newOrder = { ...prev };
      newOrder.receiver = receiver;
      newOrder.phone = phone;
      newOrder.address = address;
      newOrder.items = myCart;
	  newOrder.totalPrice=totalPrice();
      return newOrder;
    });
}
const fetchPostApi =async ()=>{
	await fetch("http://localhost:5000/api/Orderlist", {
      method: "POST",
      body: JSON.stringify(order),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
} 
useEffect(()=>{
	fetchPostApi()
},[order,start])
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
              </tr>
            </thead>
            <tbody>
              {myCart.map((item, index) => {
                const {
                  productId,
                  productName,
                  count,
                  amount,
                  price,
                  imageUrl,
                } = item;
                return (
                  <Item
                    key={`item${index}`}
                    productId={productId}
                    productName={productName}
                    count={count}
                    amount={amount}
                    price={price}
                    imageUrl={imageUrl}
                  />
                );
              })}
              {/* <Item/> */}
            </tbody>
            <tfoot>
              <td>總金額</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${totalPrice()}</td>
            </tfoot>
          </table>
          <h3 className="text-center">訂購人資訊</h3>
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
              <label for="receiverPhone" class="col-sm-2 col-form-label mt-3">
                連絡電話
              </label>
              <div class="col-sm-10 mt-3">
                <input
                  type="tel"
                  class="form-control"
                  id="receiverPhone"
                  placeholder="輸入收件人電話"
                  onChange={phoneChange}
                  vaule={phone}
                ></input>
              </div>
              <label for="receiverAddress" class="col-sm-2 col-form-label mt-3">
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
              <button
                type=""
                class="btn btn-success container-fluid mt-3"
                onClick={setOrderAndSubmit}
              >
                確認並送出訂單
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
