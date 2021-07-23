import React, { useState, useEffect } from "react";
import { getCustomizeProductData } from "../../config";
import "./Customized.scss";
import { data } from "./data/"; //假裝資料

//伺服器fetch
// async function fetchData(setProducts) {
//   const res = await fetch(`${getCustomizeProductData}`);
//   const products = await res.json();
//   setProducts(products);
// }
function Customized() {
  const [products, setProducts] = useState([]);
  console.log(products);

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
          <aside className="col-md-2 d-none d-lg-block ">
            <div className="tagGroup ms-4">
              <span className="btn d-block text-center tag-all">全部商品</span>
              <span className="btn d-block text-center tag-whitening">
                美白
              </span>
              <span className="btn d-block text-center tag-slimming">瘦身</span>
              <span className="btn d-block text-center tag-silverHair">
                銀髮族
              </span>
              <span className="btn d-block text-center tag-vision">顧眼睛</span>
            </div>
            <div className="progressgroup">
              <p className="h4 text-center">每周營養所需</p>
              <div className="progress">
                <div className="progress-bar carbon_water" role="progressbar">
                  0%
                </div>
              </div>
              <p className="text-center my-0">碳水化合物</p>
              <div className="progress">
                <div className="progress-bar dietary_fiber" role="progressbar">
                  0%
                </div>
              </div>
              <p className="text-center my-0">膳食纖維</p>
              <div className="progress">
                <div className="progress-bar vitamin_A" role="progressbar">
                  0%
                </div>
              </div>
              <p className="text-center my-0">維他命A</p>
              <div className="progress">
                <div className="progress-bar vitamin_C" role="progressbar">
                  0%
                </div>
              </div>
              <p className="text-center my-0">維他命C</p>
              <div className="progress">
                <div className="progress-bar Potassium" role="progressbar">
                  0%
                </div>
              </div>
              <p className="text-center my-0">鉀</p>
            </div>
          </aside>
          <main className="col-12 col-lg-6 customizedProduct">
            <div className="sticky-top title title-all">
              <a className="text-white fs-3 prevbutton" role="button">
                <i className="fas fa-caret-left"></i>
              </a>
              <button className="allButton">全部商品</button>
              <a className="text-white fs-3 nextbutton" role="button">
                <i className="fas fa-caret-right "></i>
              </a>
            </div>
            <p className="introduction">
              點擊圖片查看詳細資訊，可以按<i className="far fa-plus-square"></i>
              加入客製化水果盒
            </p>
            {/* 全部商品 */}
            <div className="all">
              {/* 芭樂 */}
              <article className="芭樂">
                <div>
                  <div className="fruitMenu shadow">
                    <div className="smallImageBox">
                      <img
                        className="productImage"
                        src="https://images.pexels.com/photos/2134037/pexels-photo-2134037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                      />
                    </div>
                    <a className="btn">▼</a>
                  </div>
                  {/* 珍珠芭樂 */}
                  <div className="row productItem">
                    <div className="col-2 h-100 d-flex justify-content-center align-items-center productItemImage">
                      <div className="smallImageBox ">
                        <img
                          className="productImage imageLarge"
                          src="https://images.pexels.com/photos/5945840/pexels-photo-5945840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-3 h-100 d-flex align-items-center justify-content-center">
                      <p className="fs-4 ">珍珠芭樂</p>
                    </div>
                    <div className="col-2 h-100 d-flex align-items-center">
                      <p className="price">
                        <i className="fas fa-dollar-sign"></i>50
                      </p>
                      <p className="d-block">/顆</p>
                    </div>
                    <div className="col-1 h-100 d-flex align-items-center justify-content-end">
                      <p className="btn addCart ">
                        <i className="far fa-plus-square"></i>
                      </p>
                    </div>
                    <div className="col-2 h-100 d-flex align-items-center">
                      <div className="smallImageBox">
                        <img
                          className="productImage"
                          src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-2 h-100 d-flex align-items-center">
                      <div>
                        <p className="my-0">Josh</p>
                        <p className="my-0">
                          4.5<i className="fas fa-star"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </main>
          {/* 右側 */}
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
              <div><p>每周所需分量為40份</p></div>
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
        </div>
      </div>
    </div>
  );
}
export default Customized;
