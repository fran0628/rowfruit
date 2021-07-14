import React from "react";
import "./MainProductDetail.scss";

function MainProductFitness() {
  return (
    <>
      <main>
        {/*麵包屑＋產品導覽＋產品圖＋產品購物文*/}
        <div className="container">
          <div className="container-lg row m-0">
            {/*麵包屑*/}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#/">首頁</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#/">主打水果盒選單</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  健身水果盒
                </li>
              </ol>
            </nav>
            {/*產品導覽＋產品圖*/}
            <div className="col-xl-5 col-lg-6 mt-2">
              <div className="mainpic">
                <img id="mainproduct" src="/Mainphotos/10.jpg" alt="" />
              </div>
              <div className="photoslist">
                <ul className="photos list-unstyled d-flex mt-5">
                  <li className="active">
                    <img src="/Mainphotos/10.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/14.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/13.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/12.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            {/*產品購物文*/}
            <div className="col-xl-5 col-lg-6">
              <div className="productwrite">
                <h3 className="m-0">健身人最愛【健身水果盒】</h3>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star-half-alt fa-lg"></i>
                <span> &nbsp; </span>
                <span>4.６ / 5</span>
                <span> &nbsp; </span>
                <a href="#/">30則評論</a>

                <h5>商品內容</h5>
                <ul>
                  <li>
                    <span>寶島蕉約4份</span>
                  </li>
                  <li>
                    <span>珍珠芭樂約2份</span>
                  </li>
                  <li>
                    <span>富士蘋果約1份</span>
                  </li>
                  <li>
                    <span>金鑽鳳梨約1份</span>
                  </li>
                </ul>
                <h5>出貨日期</h5>
                <ul>
                  <li>
                    <span className="text-danger">
                      07 /24 - 08 / 27，假日不可以收貨者請先備註。
                    </span>
                  </li>
                  <li>
                    <span>恕無法指定特定日期到貨，請備註無法收貨的日期</span>
                  </li>
                  <li>
                    <span>依付款順序排單，好的產品值得您耐心等候</span>
                  </li>
                  <li>
                    <span>網頁商品為示意圖片，果物依季節而略有不同</span>
                  </li>
                </ul>
                <h5>購買方案</h5>
                <div className="row">
                  <div className="col-lg-12 col-md-9">
                    <button className="product-btn active me-1">
                      體驗一箱
                    </button>
                    <button className="product-btn">月訂閱制</button>
                    <button className="product-btn me-1">季訂閱制</button>
                    <button className="product-btn">半年訂閱制</button>
                  </div>
                  <div className="col-lg-12">
                    <span className="account">數量：</span>
                    <select className="accountselect">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <span className="ms-4">售價：</span>
                    <span className="fs-4 text-danger">$500</span>
                  </div>
                  <div className="col-lg-12">
                    <button className="buy-btn">加入購物車</button>
                    <button className="sub-btn">了解訂閱方案</button>
                  </div>
                </div>
              </div>
            </div>
            {/*側欄推薦其它產品*/}
            <div className="otherproducts col-xl-2">
              <div className="ms-4 mb-2">
                <h5 className="ms-3 text-center">
                  瀏覽其它商品 &nbsp;<i className="fas fa-caret-down"></i>
                </h5>
              </div>
              <div className="asidecard card mb-4" style={{ width: "16rem" }}>
                <img src="/Mainphotos/2.jpg" className="card-img-top" alt="" />
                <div className="asidecardcontent card-body">
                  <h5 className="card-title text-center">【輕盈水果盒】</h5>
                  <p className="card-text">
                    木瓜、芭樂、火龍果、蘋果、葡萄柚、百香果
                  </p>
                </div>
              </div>
              <div className="asidecard card" style={{ width: "16rem" }}>
                <img src="/Mainphotos/1.jpg" className="card-img-top" alt="" />
                <div className="asidecardcontent card-body">
                  <h5 className="card-title text-center">【美白水果盒】</h5>
                  <p className="card-text">柑橘、芭樂、奇異果、酪梨、小番茄</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*產品水果內容介紹*/}
        <div className="container">
          <div className="container">
            <h2 className="text-center my-5">健身水果盒內容簡介</h2>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src="/Mainphotos/17.jpg" alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">寶島蕉</h4>
                  <p>
                    寶島蕉又稱新北蕉，從舊北蕉改良而來，使得新北蕉具有「抗黃葉病」與「產量豐富」的特性，並能廣泛在各地種植，深獲海外喜愛，是外銷日本的主要生力軍，而蕉苗更是行銷至南非與菲律賓等國家。
                    在口感風味上細緻且香甜，略帶粉感，果肉呈現乳白色，品質穩定且非常優秀。
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src="/Mainphotos/18.jpg" alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">珍珠芭樂</h4>
                  <p>
                    珍珠芭樂的果型接近梨形，果肉白中帶黃，芭樂籽較多，香氣足且甜度高，是目前芭樂品種中最甜的，品質風味俱佳而廣受好評，從此成為市場主流！
                    珍珠芭樂最佳品嚐時機是在秋冬，果肉較厚且肉質細緻，夏季雖然一樣香甜，但因高溫較容易變軟。
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src="/Mainphotos/19.jpg" alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">富士蘋果</h4>
                  <p>
                    因為日照充足所以甜度比普通富士更高，由農家親手一顆顆套袋。雖花費較多作業時間，其果肉緊密，比其他很多蘋果變種都要甜美和清脆，富士蘋果與其他蘋果相比有更長的最佳食用日期，甚至無需放入冰箱保存。室溫下可保存4個月，如果放入冰箱，富士蘋果可保存5到7個月。
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src="/Mainphotos/8.jpg" alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">金鑽鳳梨</h4>
                  <p>
                    生長期間是深綠色表皮，果肉為黃色或金黃色，纖維中等、果心稍大、水分多，酸甜可口、肉質細緻、多汁、維生素C及葉酸含量較高果肉帶著豐沛香氣、並透著淡淡椰子香。。非常適合鮮食，在市場上亦受到消費者之喜愛及偏好。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*訂閱方案*/}
        <div className="container">
          <div className="row">
            <div className="photopicture col-xxl-2">
              <div className="photopic">
                <img src="/Mainphotos/25.png" alt="" />
              </div>
            </div>
            {/*訂閱方案好處*/}
            <div className="warpper col-lg-4 col-xxl-4 mt-4">
              <h2 className="m-0">訂閱方案</h2>
              <ul className="ms-2">
                <li className="mb-4"><i className="far fa-check-circle fa-2x"></i><h5 className="h4 m-2" style={{display: 'inline'}}>一鍵購買就能在家享受</h5></li>
                <li className="mb-4"><i className="far fa-check-circle fa-2x"></i><h5 className="h4 m-2" style={{display: 'inline'}}>每週提供4~6種水果</h5></li>
                <li className="mb-4"><i className="far fa-check-circle fa-2x"></i><h5 className="h4 m-2" style={{display: 'inline'}}>嚴選在地水果</h5></li>
                <li className="mb-4"><i className="far fa-check-circle fa-2x"></i><h5 className="h4
                m-2" style={{display: 'inline'}}>通過有機認證</h5></li>
              </ul> 
            </div>
            {/*訂閱方案專欄*/}
            <div className="warpper col-xxl-6 col-lg-8">
              <input className="radio" id="one" name="group" type="radio" checked />
              <input className="radio" id="two" name="group" type="radio" />
              <input className="radio" id="three" name="group" type="radio" />
              <input className="radio" id="four" name="group" type="radio" />
              <div className="tabs">
                <label className="tab" id="one-tab" htmlFor="one">體驗一箱</label>
                <label className="tab" id="two-tab" htmlFor="two">月訂閱制方案</label>
                <label className="tab" id="three-tab" htmlFor="three">季訂閱制方案</label>
                <label className="tab" id="four-tab" htmlFor="four">半年訂閱制方案</label>
              </div>
              <div className="panels">
                <div className="panel" id="one-panel">
                  <div className="d-flex">
                    <img src="/Mainphotos/21.png" alt="" />
                    <ul className="m-5">
                      <li>砂糖橘柑橘約3-5份</li>
                      <li>珍珠芭樂約2-3份</li>
                      <li>秀女番茄7-8顆裝</li>
                      <li>綠色奇異果約2-3顆</li>
                    </ul>
                  </div>
                </div>
                <div className="panel" id="two-panel">
                  <div className="d-flex">
                    <img src="/Mainphotos/22.png" alt="" />
                    <ul className="m-5">
                      <li>砂糖橘柑橘約3-5份</li>
                      <li>珍珠芭樂約2-3份</li>
                      <li>秀女番茄7-8顆裝</li>
                      <li>綠色奇異果約2-3顆</li>
                    </ul>
                  </div>
                </div>
                <div className="panel" id="three-panel">
                  <div className="d-flex">
                    <img src="/Mainphotos/22.png" alt="" />
                    <ul className="m-5">
                      <li>砂糖橘柑橘約3-5份</li>
                      <li>珍珠芭樂約2-3份</li>
                      <li>秀女番茄7-8顆裝</li>
                      <li>綠色奇異果約2-3顆</li>
                    </ul>
                  </div>
                </div>
                <div className="panel" id="four-panel">
                  <div className="d-flex">
                    <img src="/Mainphotos/22.png" alt="" />
                    <ul className="m-5">
                      <li>砂糖橘柑橘約3-5份</li>
                      <li>珍珠芭樂約2-3份</li>
                      <li>秀女番茄7-8顆裝</li>
                      <li>綠色奇異果約2-3顆</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*RWD訂閱方案*/}
        <div className="container d-flex justify-content-center my-4">
          <div className="box justify-content-center">
              <div className="item">
                  <a className="d-block text-center active p-3" href="#/">體驗一箱</a>
                  <div className="content active d-flex justify-content-center">
                      <ul className="menu-item-content p-0">
                          <li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
                          <li className="p-1 text-center">珍珠芭樂約2-3份</li>
                          <li className="p-1 text-center">秀女番茄7-8顆裝</li>
                          <li className="p-1 text-center">綠色奇異果約2-3顆</li>
                      </ul>
                  </div>
              </div>  
              <div className="item">
                  <a className="d-block text-center p-3" href="#/">月訂閱制方案</a>
                  <div className="content d-flex justify-content-center">
                      <ul className="menu-item-content p-0">
                        <li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
                        <li className="p-1 text-center">珍珠芭樂約2-3份</li>
                        <li className="p-1 text-center">秀女番茄7-8顆裝</li>
                        <li className="p-1 text-center">綠色奇異果約2-3顆</li>
                      </ul>
                  </div>
              </div>
              <div className="item ">
                  <a className="d-block text-center p-3" href="#/">季訂閱制方案</a>
                  <div className="content d-flex justify-content-center">
                      <ul className="menu-item-content p-0">
                        <li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
                        <li className="p-1 text-center">珍珠芭樂約2-3份</li>
                        <li className="p-1 text-center">秀女番茄7-8顆裝</li>
                        <li className="p-1 text-center">綠色奇異果約2-3顆</li>
                      </ul>
                  </div>
              </div>
              <div className="item">
                  <a className="d-block text-center p-3" href="#/">半年訂閱制方案</a>
                  <div className="content d-flex justify-content-center">
                      <ul className="menu-item-content p-0">
                        <li className="pt-3 p-1 text-center">砂糖橘柑橘約3-5份</li>
                        <li className="p-1 text-center">珍珠芭樂約2-3份</li>
                        <li className="p-1 text-center">秀女番茄7-8顆裝</li>
                        <li className="p-1 text-center">綠色奇異果約2-3顆</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        {/*評價*/}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-5">
              <div className="asidepic">
                <img src="/Mainphotos/23.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="phone">
                <div className="phonetop"></div>
                <div className="screen">
                  <div className="m-4">
                    <h2 style={{display:'inline'}}>評價</h2>
                    <h5 style={{display:'inline'}}>(21則評論)</h5>
                    <button id="screenbtn" className="screen-btn">我要留言</button>
                    <hr />
                    {/*評價-1*/}
                    <div className="mb-4 screen-evaluation">
                      <div className="d-flex">
                        <img src="/Mainphotos/avatar1.png" alt="" />
                        <div className="d-flex flex-column">
                          <span className="ms-3">隔壁阿明</span>
                          <div className="d-flex ms-2">
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div style={{marginLeft:'95px'}}><span>呷咧北賣喔 給你五顆讚拉</span>
                      </div>
                    </div>
                   {/*評價-2*/}
                    <div className="mb-4 screen-evaluation">
                      <div className="d-flex">
                        <img src="/Mainphotos/avatar2.png" alt="" />
                        <div className="d-flex flex-column">
                          <span className="ms-3">我是小美</span>
                          <div className="d-flex ms-2">
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div style={{marginLeft:'95px'}}><span>很可以喔厚呷</span>
                      </div>
                    </div>
                    {/*評價-3*/}
                    <div className="mb-4 screen-evaluation">
                      <div className="d-flex">
                        <img src="/Mainphotos/avatar3.png" alt="" />
                        <div className="d-flex flex-column">
                          <span className="ms-3">春日部妮妮</span>
                          <div className="d-flex ms-2">
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div style={{marginLeft:'95px'}}><span>最喜歡你們家水果了</span>
                      </div>
                    </div>
                    {/*評價-4*/}
                    <div className="mb-4 screen-evaluation">
                      <div className="d-flex">
                        <img src="/Mainphotos/avatar4.png" alt="" />
                        <div className="d-flex flex-column">
                          <span className="ms-3">上班族阿Ken</span>
                          <div className="d-flex ms-2">
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div style={{marginLeft:'95px'}}><span>優秀喔上班族訂起來</span>
                      </div>
                    </div>
                    {/*評價-5*/}
                    <div className="mb-4 screen-evaluation">
                      <div className="d-flex">
                        <img src="/Mainphotos/avatar1.png" alt="" />
                        <div className="d-flex flex-column">
                          <span className="ms-3">中部王陽明</span>
                          <div className="d-flex ms-2">
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="fas fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div style={{marginLeft:'95px'}}><span>水果甜甜的真美味</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone-btn"></div>
              </div>
            </div>
            <div className="top col-2">
              <button onclick="topFunction()" id="topBtn"><i className="fas fa-angle-up fa-3x"></i></button>
            </div>
          </div>
        </div>
        {/*RWD評價*/}
        <div className="rwdphone m-4">
          <h5 style={{display:'inline'}}>(21則評論)</h5>
          <button id="screenbtn" className="screen-btn">我要留言</button>
          <hr />
          {/*RWD評價-1*/}
          <div className="mb-4 evaluation">
            <div className="d-flex">
              <img src="/photo/avatar1.png" alt="" />
              <div className="d-flex flex-column">
                <span className="ms-3">隔壁阿明</span>
                <div className="d-flex ms-2">
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                </div>
              </div>
            </div>
            <div style={{marginLeft:'95px'}}><span>呷咧北賣喔 給你五顆讚拉</span>
            </div>
          </div>
          {/*RWD評價-2*/}
          <div className="mb-4 evaluation">
            <div className="d-flex">
              <img src="/photo/avatar2.png" alt="" />
              <div className="d-flex flex-column">
                <span className="ms-3">我是小美</span>
                <div className="d-flex ms-2">
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="far fa-star fa-lg"></i>
                </div>
              </div>
            </div>
            <div style={{marginLeft:'95px'}}><span>很可以喔厚呷</span>
            </div>
          </div>
          {/*RWD評價-3*/}
          <div className="mb-4 evaluation">
            <div className="d-flex">
              <img src="/photo/avatar3.png" alt="" />
              <div className="d-flex flex-column">
                <span className="ms-3">春日部妮妮</span>
                <div className="d-flex ms-2">
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                </div>
              </div>
            </div>
            <div style={{marginLeft:'95px'}}><span>最喜歡你們家水果了</span>
            </div>
          </div>
         {/*RWD評價-4*/}
          <div className="mb-4 evaluation">
            <div className="d-flex">
              <img src="/photo/avatar4.png" alt="" />
              <div className="d-flex flex-column">
                <span className="ms-3">上班族阿Ken</span>
                <div className="d-flex ms-2">
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                </div>
              </div>
            </div>
            <div style={{marginLeft:'95px'}}><span>優秀喔上班族訂起來</span>
            </div>
          </div>
          {/*RWD評價-5*/}
          <div className="mb-4 evaluation">
            <div className="d-flex">
              <img src="/photo/avatar1.png" alt="" />
              <div className="d-flex flex-column">
                <span className="ms-3">中部王陽明</span>
                <div className="d-flex ms-2">
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="fas fa-star fa-lg"></i>
                  <i className="far fa-star fa-lg"></i>
                </div>
              </div>
            </div>
            <div style={{marginLeft:'95px'}}><span>水果甜甜的真美味</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainProductFitness;
