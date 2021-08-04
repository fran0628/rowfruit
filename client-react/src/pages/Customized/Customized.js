import React, { useState, useEffect, useRef } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data"; //假裝資料
import LeftAside from "./components/LeftAside/LeftAside";
import Middle from "./components/Middle/Middle";
import RightAside from "./components/RightAside/RightAside";
import Modal from "./components/Modal/Modal";
import ImageContent from "./components/Modal/ModalContent/ImageContent";
// 伺服器fetch
// async function fetchData(setProducts) {
//   const res = await fetch(`${getCustomizeProductData}`);
//   const products = await res.json();
//   setProducts(products);
// }
function Customized(props) {
  const { setTotalCart, setCartUpdate } = props;
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
  // console.log("最上面product",products)
  //計算分量加總
  const totalWight = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].wight;
    }
    return sum;
  };

  //計算價格加總
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].price;
    }
    return sum;
  };
  const [modalData, setModalData] = useState({
    fruitName: "",
    images: [],
    farmerName: "",
    farmerImage: "",
    farmerContent: "",
  });
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500);
  }, [modalData]);
  const modalRef = useRef();
  console.log(modalRef.current)
  return (
    <>
      <Modal ref={modalRef}>
        {dataLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <h1 className="mt-0 d-flex justify-content-center">
              {modalData.fruitName}
            </h1>
            <div className="row">
              <div className="col-7 d-flex align-items-center h-100">
                <ImageContent Images={modalData.images} />
              </div>
              <div className="col-5">
                <h2 className="d-flex justify-content-center mt-0">
                  {modalData.farmerName}
                </h2>
                <div className="pb-2" style={{ height: "200px" }}>
                  <img
                    className="productImage"
                    src={modalData.farmerImage}
                    alt=""
                  />
                </div>
                <div className="textBox">
                  <p>{modalData.farmerContent}</p>
                </div>
                <button
                  className="closeModal"
                  onClick={() => {
                    modalRef.current.close();
                  }}
                >
                  關閉
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
      <div className="customizedTitle mt-5">
        <div className="container mt-5">
          <h1 className="text-center pb-4 p-offset">客製化水果盒</h1>
        </div>
        <div className="container">
          <div className="row">
            {/* 左側邊 */}
            <LeftAside cartData={cartData} />
            {/* 商品區塊 */}
            <Middle
              data={products}
              cartData={cartData}
              addCart={setCartData}
              setCounts={setCounts}
              modalRef={modalRef}
              setModalData={setModalData}
              setDataLoading={setDataLoading}
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
    </>
  );
}
export default Customized;
