import React, { useState } from 'react'

function BuyContent(props) {
    const {name, fruit_item, boxprice} = props
    // const fruitcontent = fruit_item.split(/\s+/);
    // console.log(typeof(fruit_item))
    const [total, setTotal] = useState(1)
    const [price, setPrice] = useState(boxprice)

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

    
    function addCart() {
      
    }
  
    // const boxcontent = fruit_item.split(' ');
    // console.log(boxcontent)
    // for (var i = 0; i < boxcontent.length; i++) {
    //     const item = boxcontent[i];
    //     console.log(i, item);
    //   }
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
                  <li>
                    <span>{fruit_item}</span>
                  </li>
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
                    <button className="sub-btnbuy">選擇訂閱方案</button>
                  </div>
                </div>
              </div>
            </div>
        </>
    )

}

export default BuyContent
