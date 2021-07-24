import React from "react";

function RightAside() {
  return (
    <>
      <aside className="col-md-4 d-none d-lg-block position-relative">
        <h2 className="text-center customerCartList">客製化列表</h2>
        <p className="text-center unSelected">尚未選取商品</p>
        <div className="cartLIstContainer">
          {/* 客製化列表明細 */}
          <div className="cartList d-flex align-items-center justify-content-between border border-3">
            <div class="cartListImage">
              <img
                className="productImage"
                src="https://images.pexels.com/photos/8723308/pexels-photo-8723308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="itemName">
              <p>珍珠芭樂</p>
            </div>
            <div>
              <i className="fas fa-minus"></i>
              <span className="itemQuantity">1</span>
              <i className="fas fa-plus"></i>
            </div>
            <div className="itemPrice">
              <span>$</span>
              <span>100</span>
            </div>
            <div>
              <span>分量</span>
              <span>4</span>
            </div>
            <i className="pe-2 fas fa-trash-alt"></i>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <p className="px-3">份量</p>
            <p>0</p>
          </div>
          <div>
            <p>每周所需分量為40份</p>
          </div>
          <div className="d-flex">
            <p className="px-3">總金額</p>
            <p>$</p>
            <p>0</p>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button className="buy-btn">
            <i className="fas fa-shopping-cart"></i>加入購物車
          </button>
          <button className="sub">立即結帳</button>
        </div>
        <button className="btn removeFruit">Remove All</button>
        <div className="fruitbox"></div>
      </aside>
    </>
  );
}
export default RightAside;
