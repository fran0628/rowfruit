import React from "react";
import CartListContent from "./CartListContent";

function RightAside(props) {
  const {
    data,
    cartData,
    setCartData,
    totalWight,
    totalPrice,
    counts,
    setCounts,
    setTotalCart,
  } = props;
    
  const customizedProduct = {
    productId: 99,
    productName: "客製化水果盒",
    count:1,
    amount: "",
    price: totalPrice,
    imageUrl:"http://localhost:3000/images/CustomizedPhotos/customized.jpeg"
  };
  const amount = [];
  for (let i = 0; i < cartData.length; i++) {
    amount.push(`${cartData[i].fruitname}*${counts[i]}`);
  }
  customizedProduct.amount = amount.join(",");


const updateCartToLocalStorage = () => {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || []
  currentCart.push(customizedProduct)
  localStorage.setItem('cart', JSON.stringify(currentCart))

  setTotalCart(function (prevData) {
    const newTotalCart = [...prevData];
    newTotalCart.push(customizedProduct)
    return newTotalCart;
  });
  setCartData([])
  setCounts([])

}


return (
    <>
      <aside className="col-md-4 d-none d-lg-block position-relative">
        <h2 className="text-center customerCartList">客製化列表</h2>
        {cartData.length === 0 && (
          <p className="text-center unSelected">尚未選取商品</p>
        )}

        <div className="cartLIstContainer">
          {/* 客製化列表明細 */}
          {cartData.map((item, index) => {
            const {
              id,
              fruitname,
              imageFront,
              images,
              price,
              wight,
              nutrients,
            } = item;
            return (
              <CartListContent
                key={id}
                id={id}
                data={data}
                fruitname={fruitname}
                imageFront={imageFront}
                images={images}
                price={price}
                wight={wight}
                nutrients={nutrients}
                index={index}
                setCartData={setCartData}
                cartItem={cartData[index]}
                setCounts={setCounts}
                count={counts[index]}
                setCount={(newCount) => {
                  const newCounts = [...counts];
                  newCounts[index] = newCount < 1 ? 1 : newCount;
                  setCounts(newCounts);
                }}
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
          <button onClick={updateCartToLocalStorage} className="buy-btn">
            <i  className="fas fa-shopping-cart"></i>
            加入購物車
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
