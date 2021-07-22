import React, { useState, useEffect } from 'react'
import { apiMainProduct } from '../../../global/API'
import "./MainProductDetail.scss"
import MainContent from './MainContent/MainContent'
import Aside from './Aside/Aside'
import { withRouter } from 'react-router-dom'


function MainProduct(props) {
  
const [data, setData] = useState([]);
useEffect(() => {
  (async function productdetailData() {
    const res = await fetch(apiMainProduct)
    const apidata  = await res.json()
    const productId = +props.match.params.id
    const product = apidata.find((v, i) => {
    return v.id === productId
    })

    if (product) setData (product)
    })();
}, []) 

// const idList = Object.values(data).forEach(item => Object.values(item)[0])
// const dataList = Object.values(data).map(item =>(item))
// const idList = data.map(item => Object.values(item)[0]); 
// const dataList = Object.values(data)
// console.log(data.items)
// console.log(dataList)


  /* Aside */
  const fruitboxname = {
    FruitboxOne: '多纖輕盈水果盒',
    FruitboxTwo: '健身水果盒',
  }
  const fruitboxcontent = {
    FruitcontentOne: '木瓜、芭樂、火龍果、蘋果、葡萄柚、百香果',
    FruitcontentTwo: '香蕉、芭樂、蘋果、酪梨、鳳梨',
  }
  /* MainContent */
  const fruitnameList = {
    FruitOne: '砂糖橘',
    FruitTwo: '珍珠芭樂',
    FruitThree: '秀女番茄',
    FruitFour: '綠色奇異果',
  }
  const fruitcontent = {
    FruitOne: '砂糖橘果實扁圓形，頂部有瘤狀突起，蒂臍端凹陷，色澤橙黃，皮薄肉脆，果壁薄易剝離，果瓣為10瓣左右，無核或少核。果形指數0.78，單果重62－86克，可食率71%，可含溶性固形物11%，每100毫升含全糖10.55克，果酸0.35克。果肉爽脆',
    FruitTwo: '珍珠芭樂的果型接近梨形，果肉白中帶黃，芭樂籽較多，香氣足且甜度高，是目前芭樂品種中最甜的，品質風味俱佳而廣受好評，從此成為市場主流！珍珠芭樂最佳品嚐時機是在秋冬，果肉較厚且肉質細緻，夏季雖然一樣香甜，但因高溫較容易變軟。',
    FruitThree: '特色︰果實顏色比聖女略淡一些、形狀為橢圓形。皮薄汁多、甜中略帶有酸味。果實硬，耐長時間的運輸和儲存。',
    FruitFour: '鮮綠色果肉、白色果心、芝麻般的黑色種籽以及濃郁清香氣息，富含膳食纖維與奇異酵素，為體內注入健康活力，酸甜可口的滋味讓人耳目一新。',
  }
  const fruitpicture = {
    FruitOne: '/Mainphotos/17.jpg',
    FruitTwo: '/Mainphotos/18.jpg',
    FruitThree: '/Mainphotos/19.jpg',
    FruitFour: '/Mainphotos/8.jpg',
  }
   


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
                <h3 className="m-0">人氣商品【美白水果盒】</h3>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star-half-alt fa-lg"></i>
                <span> &nbsp; </span>
                <span>4.8 / 5</span>
                <span> &nbsp; </span>
                <a href="#/">30則評論</a>

                <h5>商品內容</h5>
                <ul>
                  <li>
                    <span>砂糖橘柑橘約4份</span>
                  </li>
                  <li>
                    <span>珍珠芭樂約2份</span>
                  </li>
                  <li>
                    <span>秀女番茄約8顆裝</span>
                  </li>
                  <li>
                    <span>綠色奇異果約2顆</span>
                  </li>
                </ul>
                <h5>出貨日期</h5>
                <ul>
                  <li>
                    <span className="text-danger">
                      單買約 1 - 3 周時間寄出，假日不可以收貨者請先備註。
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
                    <button className="buy-btn" onClick="add">單買加入購物車</button>
                    <button className="sub-btn">選擇訂閱方案</button>
                  </div>
                </div>
              </div>
            </div>
            {/*側欄推薦其它產品*/}
            <Aside
              fruitboxname={fruitboxname}
              fruitboxcontent={fruitboxcontent}
            />
          </div>
        </div>
        {/*產品水果內容介紹*/}
        <MainContent
          // fruitnameList={fruitnameList}
          // fruitcontent={fruitcontent}
          // fruitpicture={fruitpicture}
          // id = {data.id}
          // fruit_item = {data.fruit_item}
          // product_name = {data.product_name}
          // price = {data.price}
          // images = {data.images}

          datacontent = {data.items}
        />
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

export default withRouter(MainProduct);
