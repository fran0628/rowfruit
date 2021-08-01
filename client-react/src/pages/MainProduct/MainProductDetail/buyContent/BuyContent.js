import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Swal from "sweetalert2";

function BuyContent(props) {
  const {id, name, fruit_item, boxprice, images, setCartUpdate} = props
  const fruitcontent = fruit_item.split(/\s+/);
  const [total, setTotal] = useState(1)
  const [price, setPrice] = useState(boxprice)
  const urlsub = "/subscribecart"
  
  // 購買方案按鈕＋-
  function plus() {
    setTotal(total + 1)
    setPrice(function (prev){
      return prev + boxprice
    })
  }
  function minus() {
  if (total > 1) 
  setTotal(total - 1)
  if (total > 1) 
  setPrice(function (prev){
      return prev - boxprice
  })
  }

 // 更新購物車中的商品數量

  // sweetalert
  function remind() {
    Swal.fire({
      title: "你已選擇過商品了喔",
      confirmButtonText: "關閉",
    });
  }


  // 加入購物車的localstorage

  const fruitamount = fruitcontent.join(',');
  
  const mainProduct = {
    productId: id,
    productName: "主打水果盒",
    count: 1,
    amount: fruitamount,
    price: boxprice,
    imageUrl: images,
  };


  function addCart() {
  if (mainProduct.productId === id) {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(mainProduct);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    props.history.push('/cart')

    setCartUpdate(true);
  } else {
    remind();
  }
  }


  
  return (
      <>
          <div className="col-xl-5 col-lg-6">
            <div className="productwrite">
              <h3 className="m-0">人氣商品【{name}水果盒】</h3>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star-half-alt fa-lg"></i>
              <span> &nbsp; </span>
              <span>4.8 / 5</span>
              <span> &nbsp; </span>
              <a href="#/">30則評論</a>

              <h5>商品內容</h5>
              <ul>
                <li><span>{fruitcontent[0]}&nbsp;&nbsp;{fruitcontent[1]}&nbsp;&nbsp;{fruitcontent[2]}<br/></span></li>
                <li><span>{fruitcontent[3]}&nbsp;&nbsp;{fruitcontent[4]}&nbsp;&nbsp;{fruitcontent[5]}</span></li>
              </ul>
              <h5>出貨日期</h5> 
              <ul>
                <li>
                  <span className="text-danger">
                    單買約 1-2 周時間寄出，假日不可以收貨者請先備註
                  </span>
                </li>
                <li>
                  <span>恕無法指定特定日期到貨，請備註無法收貨的日期</span>
                </li>
                <li>
                  <span>依付款順序排單，好的產品值得您耐心等候</span>
                </li>
                <li>
                  <span>網頁商品為示意圖片，果物依季節而略有不同</span>
                </li>
              </ul>
              <h5>購買方案</h5>
              <div className="row">
                <div className="col-lg-12">
                  <span className="account">數量：</span>
                  <button className="btn-minus" onClick={minus}><i class="fas fa-minus"></i></button>
                  <span className="fs-4"> {total} </span>
                  <button className="btn-plus" onClick={plus}><i class="fas fa-plus"></i></button>
                  <span className="ms-4">售價：</span>
                  <span className="fs-4 text-danger">${price}</span>
                </div>
                <div className="col-lg-12">
                  <button className="buy-btnbuy" onClick={addCart}>單買加入購物車</button>
                  <Link to={urlsub}><button className="sub-btnbuy">選擇訂閱方案</button></Link>
                </div>
              </div>
            </div>
          </div>
      </>
  )

}

export default withRouter(BuyContent)