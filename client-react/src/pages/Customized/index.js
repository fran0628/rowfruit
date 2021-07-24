import React, { useState, useEffect } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data"; //假裝資料
import LeftAside from "./components/LeftAside";
import Middle from "./components/Middle";
import RightAside from "./components/RightAside";

//伺服器fetch
// async function fetchData(setProducts) {
//   const res = await fetch(`${getCustomizeProductData}`);
//   const products = await res.json();
//   setProducts(products);
// }
function Customized() {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    setProducts(data); //假裝資料
    //伺服器資料
    // fetchData(setProducts);
  }, []);

  return (
    <div className="customizedTitle">
      <div className="container ">
        <h1 className="display-4 text-center fw-bold">客製化水果盒</h1>
      </div>
      <div className="container">
        <div className="row"> 
        {/* 左側邊 */}
          <LeftAside/>
          {/* 商品區塊 */}
         <Middle data={data}/>
          {/* 右側 */}
          <RightAside />
        </div>
      </div>
    </div>
  );
}
export default Customized;
