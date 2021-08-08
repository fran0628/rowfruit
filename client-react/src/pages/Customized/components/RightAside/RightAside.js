import React,{useState} from "react";
import CartListContent from "./CartListContent";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import Progress from "../RightAside/Progress";

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
    if (customizedProduct) {
      Swal.fire({
        title: `${customizedProduct.productName}加入成功`,
        text: "點擊右上角查看",
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
    content: "",
    price: totalPrice,
    imageUrl: "http://localhost:3000/images/CustomizedPhotos/customized.jpg",
  };
  const content = [];
  for (let i = 0; i < cartData.length; i++) {
    content.push(`${cartData[i].fruitname}${counts[i]}個`);
  }
  customizedProduct.content = content.join(",");

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
  function addCartAndTurnCartPage() {
    updateCartToLocalStorage();
    props.history.push("/cart");
  }
  function removeData() {
    setCartData([]);
    setCounts([]);
  }


  let carbon_water = 0;
  let dietary_fiber = 0;
  let vitamin_A = 0;
  let vitamin_C = 0;
  let Potassium = 0;
  for (let i = 0; i < cartData.length; i++) {
    carbon_water += +cartData[i].nutrientsArray[0];
    dietary_fiber += +cartData[i].nutrientsArray[1];
    vitamin_A += +cartData[i].nutrientsArray[2];
    vitamin_C += +cartData[i].nutrientsArray[3];
    Potassium += +cartData[i].nutrientsArray[4];
  }

  const nutrients = [
    {
      className: "carbon_water",
      chineseName: "碳水化合物",
      width: carbon_water,
    },
    {
      className: "dietary_fiber",
      chineseName: "膳食纖維",
      width: dietary_fiber,
    },
    { className: "vitamin_A", chineseName: "維他命A", width: vitamin_A },
    { className: "vitamin_C", chineseName: "維他命C", width: vitamin_C },
    { className: "Potassium", chineseName: "鉀", width: Potassium },
  ];


  return (
    <>
      <aside
        className="col-md-4 d-none d-lg-block position-relative rightAside"
        style={{ height: "700px" }}
      >
      {cartData.length !==0 && <div className="rightBackground" style={{backgroundImage:`url("http://localhost:3000/images/CustomizedPhotos/${cartData[0].imageFront}/${cartData[0].images}")`}} >
      </div> }
      
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
              wight
              ,
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

        <div className="d-flex justify-content-center">
          <div>
            {totalWight > 40 ? (
              <p className="activeClass">您已經達到每周所需份量</p>
            ) : (
              <p className="text-dark">每周所需分量為40份</p>
            )}
          </div>
        </div>
        <div className="row rightAsideMiddle">
          <div className="col-7">
          <div className="progressgroup">
          <p className="h4 text-center text-dark">每周營養所需</p>
          {nutrients.map((item, index) => {
            const { className, chineseName, width } = item;
            return (
              <Progress
                key={index}
                className={className}
                chineseName={chineseName}
                width={width}
              />
            );
          })}
        </div>
          </div>
          <div className="col-5">
           
              <p className="d-flex justify-content-center px-3 text-dark">份量</p>
              <p className="d-flex justify-content-center text-dark">{totalWight}</p>
           
           
              <p className="d-flex justify-content-center text-dark px-3">總金額</p>
              <p className="d-flex justify-content-center text-dark fs-5">${totalPrice}</p>
             
          
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button onClick={updateCartToLocalStorage} className="buy-btn">
            <i className="fas fa-shopping-cart"></i>
            加入購物車
          </button>
          <button onClick={addCartAndTurnCartPage} className="sub">
            立即結帳
          </button>
        </div>
        <button onClick={removeData} className="btn removeFruit">
          清除購物車列表
        </button>
        <div className="fruitbox"></div>
      </aside>
    </>
  );
}
export default withRouter(RightAside);
