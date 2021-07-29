import React,{useState,useEffect} from "react";
import Item from "./components/Item";
import summary from "./components/summary";
import buyer from "./components/buyer";

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
      <h3 className="text-center">購物車清單</h3>
      <div className="container" style={background}>
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
          <h3 className="text-center">付款摘要</h3>
          <table className="table table-success container">
            <thead>
              <tr>
                <th scope="col">商品圖片</th>
                <th scope="col">商品數量</th>
                <th scope="col">商品總價</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-center">訂購人資訊</h3>
      <form class="container">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            購買姓名
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="王x名"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            連絡電話
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="09xxxxxxxx"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            寄送地址
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="台北市信義區吳興街177號"
            ></input>
          </div>
          <button type="submit" class="btn btn-success container-fluid mt-3">
            確認並送出訂單
          </button>
        </div>
      </form>
    </>
  );
}
export default Cart;
