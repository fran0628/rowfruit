import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";
import Swal from "sweetalert2";
import {v4} from "uuid"
function Cart({setCartUpdate}) {
  //設定本地資料
  const [myCart, setMyCart] = useState([]);
  //送出開關 資料清空所需要
  const [start, setStart] = useState(false);
  //post出去資料格式初始化與設定
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
 //拿到localStorage資料放進mycart
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";
    setMyCart(JSON.parse(newCart));
  }
  //一開始就把資料丟進去myCart
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);
  function successAdd (){
    Swal.fire({
      title: "感謝您的購買",
      confirmButtonText: '查看明細',
      cancelButtonText: '關閉',
      showCancelButton: true,
      showCloseButton: true
    });
  }
  useEffect(()=>{
    if(start){
      successAdd()
    }
  },[myCart,start])

  
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
  
  function setOrderAndSubmit() {
    setCartUpdate(true)
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
    setMyCart([])
    localStorage.removeItem("cart");
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
                    key= {v4()}
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
              {myCart.length===0? <button disabled>購物車內尚未有商品</button> : <button
                type=""
                class="btn btn-success container-fluid mt-3"
                onClick={setOrderAndSubmit}
              >
                確認並送出訂單
              </button> }
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
