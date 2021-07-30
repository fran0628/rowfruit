import React,{useState,useEffect} from "react";
import Item from "./components/Item";
import DeliverynPayment from "./components/DeliverynPayment";
import Buyer from "./components/Buyer";

function Cart() {
  const[myCart,setMyCart]=useState([])
  const background = {
    backgroundImage: `url(${""})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
    console.log("JSON.parse(newCart)",JSON.parse(newCart))
    setMyCart(JSON.parse(newCart))
  }

  useEffect(()=>{
    getCartFromLocalStorage()
  },[])

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
              {myCart.map((item) => {
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
          <Buyer />
        </div>
      </div>
    </>
  );
}
export default Cart;
