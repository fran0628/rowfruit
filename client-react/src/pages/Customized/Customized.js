import React, { useState, useEffect } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data"; //假裝資料
import LeftAside from "./components/LeftAside/LeftAside";
import Middle from "./components/Middle/Middle";
import RightAside from "./components/RightAside/RightAside";
import BackgroundSlider from 'react-background-slider'
// 伺服器fetch
// async function fetchData(setProducts) {
//   const res = await fetch(`${getCustomizeProductData}`);
//   const products = await res.json();
//   setProducts(products);
// }
function Customized(props) {
  const {setTotalCart,setCartUpdate}=props
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
  //加到購物車列表資料
  // cartData=
  // [{fruitname: ""
  // id: 0
  // imageFront: ""
  // images: ""
  // nutrients: ""
  // price: 0
  // wight: 0}]
  const [cartData, setCartData] = useState([]);
  //控制數量的陣列  counts=[Number,Number]
  const [counts, setCounts] = useState([]);
  // console.log("最上面cartData", cartData);
  // console.log("最上面counts", counts);
  // console.log("最上面data",data)
  //計算分量加總
  const totalWight = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].wight
    }
    return sum;
  };

  //計算價格加總
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].price
    }
    return sum;
  };

  return (
    <div className="customizedTitle">
      <div className="container ">
        <h1 className="text-center fw-bold pb-4 pt-2">客製化水果盒</h1>
      </div>
      <div className="container">
    <BackgroundSlider images={["https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]} duration={10} transition={2} />
        <div className="row">
          {/* 左側邊 */}
          <LeftAside cartData={cartData} />
          {/* 商品區塊 */}
          <Middle
            data={products}
            cartData={cartData}
            addCart={setCartData}
            setCounts={setCounts}
          />
          {/* 右側 */}
          <RightAside
            data={products}
            cartData={cartData}
            setCartData={setCartData}
            totalPrice={totalPrice()}
            totalWight={totalWight()}
            counts={counts}
            setCounts={setCounts}
            setTotalCart={setTotalCart}
            setCartUpdate={setCartUpdate}
          />
        </div>
      </div>
    </div>
   
  );
}
export default Customized;
