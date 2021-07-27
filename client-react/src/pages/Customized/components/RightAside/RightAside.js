import React from "react";
import CartListContent from "./CartListContent";

function RightAside(props) {
  const { data,cartData,setCartData,totalWight,totalPrice,counts,setCounts} = props;
  // console.log("rightSideCartData", cartData);

  return (
    <>
      <aside className="col-md-4 d-none d-lg-block position-relative">
        <h2 className="text-center customerCartList">客製化列表</h2>
        {cartData.length===0 && <p className="text-center unSelected">尚未選取商品</p>}
        
        <div className="cartLIstContainer">
          {/* 客製化列表明細 */}
          {cartData.map((item,index) => {
            const { id, fruitname, imageFront, images, price, wight,nutrients } = item;
            return (
              <CartListContent
                key={id}
                id={id}
                fruitname={fruitname}
                imageFront={imageFront}
                images={images}
                price={price}
                wight={wight}
                nutrients={nutrients}
                setCartData={setCartData}
                cartData={cartData}
                index={index}
                data={data}
              />
            );
          })}

        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <p className="px-3">份量</p>
            <p>{totalWight}</p>
          </div>
          <div>
            <p>每周所需分量為40份</p>
          </div>
          <div className="d-flex">
            <p className="px-3">總金額</p>
            <p>$</p>
            <p>{totalPrice}</p>
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
