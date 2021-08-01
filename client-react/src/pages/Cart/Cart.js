import React,{useState,useEffect} from "react";
import Item from "./components/Item";
import DeliverynPayment from "./components/DeliverynPayment";
import Buyer from "./components/Buyer"
function Cart({cart}) {
  const[myCart,setMyCart]=useState([])
  const background = {
    backgroundImage: `url(${""})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  console.log("cart",cart)
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
    console.log("JSON.parse(newCart)",JSON.parse(newCart))
    setMyCart(JSON.parse(newCart))
  }

  useEffect(()=>{
    getCartFromLocalStorage()
  },[])

  const sendFake = async () => {
    const order = {
      "memberId": 110,
      "totalPrice": 20000,
      "address": "25 VIA LUCCA",
      "receiver": "Tony",
      "phone": "9495330930",
      "items": [{
        "productId": 1,
        "amount": 3,
        "content": "asd"
      }, {
        "productId": 2,
        "amount": 1,
        "content": "fake2"
      }]
    };
    await fetch('http://localhost:5000/api/Orderlist', {
      method: "POST",
      body: JSON.stringify(order),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
  };

  return (
    <>
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
          </table>
          <DeliverynPayment />
          <Buyer/>
          <button onClick={sendFake}>send fake</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
