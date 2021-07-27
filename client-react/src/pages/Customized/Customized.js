import React, { useState, useEffect } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data"; //假裝資料
import LeftAside from "./components/LeftAside/LeftAside";
import Middle from "./components/Middle/Middle";
import RightAside from "./components/RightAside/RightAside";
// 伺服器fetch
// async function fetchData(setProducts) {
//   const res = await fetch(`${getCustomizeProductData}`);
//   const products = await res.json();
//   setProducts(products);
// }
function Customized() {
  const [products, setProducts] = useState([
    {
      id: 0,
      fruit_name: "",
      fruit_image: "",
      nutrients: "",
      tag: "",
      items: [
        {
          id: 0,
          fruittype: 0,
          fruitname: "",
          price: 0,
          unit: "",
          wight: 0,
          images: "",
          fram_name: "",
          avatar: "",
        },
      ],
    },
  ]);
  useEffect(() => {
    setProducts(data); //假裝資料
    // fetchData(setProducts);    //伺服器資料
  }, []);

  const [cartData, setCartData] = useState([]);
  const [counts,setCounts] =useState([])
  console.log("最上面cartData", cartData);
  console.log("最上面counts", counts);

  //計算分量加總
  const totalWight = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].quantity * cartData[i].wight;
    }
    return sum;
  };


  
  //計算價格加總
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].quantity * cartData[i].price;
    }
    return sum;
  };

  return (
    <div className="customizedTitle">
      <div className="container ">
        <h1 className="display-4 text-center fw-bold">客製化水果盒</h1>
      </div>
      <div className="container">
        <div className="row">
          {/* 左側邊 */}
          <LeftAside />
          {/* 商品區塊 */}
          <Middle data={products} addCart={setCartData} counts={counts} setCounts={setCounts} />
          {/* 右側 */}
          <RightAside
            data={products}
            cartData={cartData}
            setCartData={setCartData}
            totalPrice={totalPrice()}
            totalWight={totalWight()}
            counts={counts}
            setCounts={setCounts}
          />
        </div>
      </div>
    </div>
  );
}
export default Customized;
