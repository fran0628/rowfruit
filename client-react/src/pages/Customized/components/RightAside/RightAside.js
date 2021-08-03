import React from "react";
import CartListContent from "./CartListContent";
import Swal from "sweetalert2";
import {withRouter} from 'react-router-dom'
import BackgroundSlider from "react-background-slider";

function RightAside(props) {
  const {
    data,
    cartData,
    setCartData,
    totalWight,
    totalPrice,
    counts,
    setCounts,
    setCartUpdate,
  } = props;

  function successAdd() {
    if(customizedProduct){
      Swal.fire({
        title: `${customizedProduct.productName}加入成功`,
        text: "點擊右上角查看",
        imageUrl: customizedProduct.imageUrl,
        imageAlt: "Custom image",
        confirmButtonText: "關閉",
      });
    }
   
  }
  function warning() {
    Swal.fire({
      title: "您還沒選擇商品",
      confirmButtonText: "關閉",
    });
  }

  const customizedProduct = {
    productId: 99,
    productName: "客製化水果盒",
    count: 1,
    amount: "",
    price: totalPrice,
    imageUrl: "http://localhost:3000/images/CustomizedPhotos/customized.jpg",
  };
  const amount = [];
  for (let i = 0; i < cartData.length; i++) {
    amount.push(`${cartData[i].fruitname}${counts[i]}個`);
  }
  customizedProduct.amount = amount.join(",");

  const updateCartToLocalStorage = () => {
    if (cartData.length === 0) {
      warning();
    } else {
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      currentCart.push(customizedProduct);
      localStorage.setItem("cart", JSON.stringify(currentCart));

      setCartUpdate(true);
      setCartData([]);
      setCounts([]);
      successAdd();
    }
  };
  function addCartAndTurnCartPage(){
    updateCartToLocalStorage()
    props.history.push('/cart')
  }
  function removeData(){
    setCartData([]);
      setCounts([]);
  }

  return (
    <>
      <aside className="col-md-4 d-none d-lg-block position-relative rightAside" style={{height:"700px"}}>
       <BackgroundSlider
            images={[
              "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            ]}
            duration={10}
            transition={2}
          />
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
                cartData={cartData}
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
            <p className="px-3 text-dark">份量</p>
            <p className="text-dark">{totalWight}</p>
          </div>
          <div>
            {totalWight>40? <p className="text-dark bg-warning">您已經達到每周所需份量</p>:<p className="text-dark">每周所需分量為40份</p>}
            
          </div>
          <div className="d-flex">
            <p className="px-3">總金額</p>
            <p className="text-dark">$</p>
            <p className="text-dark">{totalPrice}</p>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button onClick={updateCartToLocalStorage} className="buy-btn">
            <i className="fas fa-shopping-cart"></i>
            加入購物車
          </button>
          <button onClick={addCartAndTurnCartPage} className="sub">立即結帳</button>
        </div>
        <button onClick={removeData} className="btn removeFruit">清除購物車列表</button>
        <div className="fruitbox"></div>
      </aside>
    </>
  );
}
export default withRouter(RightAside);
