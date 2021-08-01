import React, { useState, useEffect, useRef } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data"; //假裝資料
import LeftAside from "./components/LeftAside/LeftAside";
import Middle from "./components/Middle/Middle";
import RightAside from "./components/RightAside/RightAside";
import BackgroundSlider from "react-background-slider";
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
  // console.log("最上面data",data)
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
  const [modalData,setModalData]=useState({
    images:['https://images.pexels.com/photos/8836493/pexels-photo-8836493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/6681878/pexels-photo-6681878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/6051359/pexels-photo-6051359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/8697344/pexels-photo-8697344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/8859157/pexels-photo-8859157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
    farmerName:"陳阿財果園",
    farmerImage:"https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    farmerContent:"認識啟源的時候，他是個正在讀外語學校的少校軍官，她是國立藝術學院的學生，他們的戀情發生得曲折卻又極自然，兩校聯誼郊遊，第一次他出席了，她沒來，他卻注意到有個女孩—曹修忠，和他同學同名，心上留了意；第二次，她來了，他卻走得匆匆，她對他的印象只是一百八的高個兒帥哥；第三次，他請客，她卻有事先走；兩人的交集總差那麼一點兒，三次擦身而過，卻依然逃不過注定了緣訂三生的前宿，許久之後，他單獨約了她，確定了「眾裡尋她千百度」，這個女孩就是他要的終身伴侶，她在家排行第七，他喚她：小七。"
  })
  const modalRef = useRef();
  return (
    <>
      <Modal ref={modalRef}>
        <div className="row">
          <div className="col-7 d-flex align-items-center h-100">
            <ImageContent Images={modalData.images} />
          </div>
          <div className="col-5">
            <h2 className="d-flex justify-content-center mt-0">{modalData.farmerName}</h2>
            <div className="pb-2">
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
      </Modal>
      <div className="customizedTitle">
        <div className="container ">
          <h1 className="text-center fw-bold pb-4 pt-2">客製化水果盒</h1>
        </div>
        <div className="container">
          <BackgroundSlider
            images={[
              "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            ]}
            duration={10}
            transition={2}
          />
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
