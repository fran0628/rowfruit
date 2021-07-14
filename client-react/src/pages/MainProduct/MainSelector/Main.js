import React from 'react'
import './Main.scss'
import MainFruitbox from './MainFruitbox/MainFruitbox'


function Main(){
  
  // 每個產品的名稱
  const nameList = {
    FruitboxOne: '美白水果盒',
    FruitboxTwo: '健身水果盒',
    FruitboxThree: '輕盈水果盒',
  }

  // 代表每個產品的單價
  const priceList = {
    FruitboxOne: 500,
    FruitboxTwo: 500,
    FruitboxThree: 500,
  }

  // 每個產品的圖片
  const pictureList = {
    FruitboxOne: '/Mainphotos/1.jpg',
    FruitboxTwo: '/Mainphotos/2.jpg',
    FruitboxThree: '/Mainphotos/3.jpg',
  }


  return (
    <>
      <main>
        {/*麵包屑*/}
        <div className="container">
          <div className="container mx-3 my-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#/">首頁</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  主打水果盒選單
                </li>
              </ol>
            </nav>
          </div>
        </div> 
        {/*視覺圖*/} 
        <div className="container">
            <div className="container row m-0">
                <div className="rwd_slider_container_wrapper  col-lg-7 col-md-7 p-0">
                    <div className="rwd_slider_container">    
                        <div className="slider_container">
                            <div><img src="/Mainphotos/1.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/2.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/3.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/4.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/6.jpeg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="sliderword col-lg-4 col-md-4">
                </div>
            </div>
        </div>
        {/*水果盒*/}
        <MainFruitbox
          priceList={priceList}
          nameList={nameList}
          pictureList={pictureList}
        />
        {/*訂閱方案說明文*/}
        <div className="container">
            <h1 className="display-6 fw-normal text-center">選擇適合自己的訂閱方案</h1>
            <p className="text-center">
                現在下訂會收到『 六月ROWFRUIT水果箱 』<br />
                本次出貨時間為 2021 / 6 / 26 <br />
                體驗一箱僅配送一次 <br />
                訂閱制(月訂閱制/季訂閱制/半年訂閱制)之後為每月10日出貨(遇假日順延) <br />
            </p>
        </div> 
        {/*訂閱方案介紹*/} 
        <div className="container">
            <div className="subscribe row">
                <div className="col-lg-3 col-md-6 g-2">
                    <div className="figure"><a href="#/"><img src="/Mainphotos/5.jpeg" className="card-img-top" alt="..." /></a></div>
                    <div className="card-body">
                      <h3 className="card-title">體驗一箱</h3>
                      <p className="card-text">NT $2580</p>
                      <p className="card-text">精選4-6種水果<br />嚴選在地小農</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 g-2">
                    <div className="figure"><a href="#/"><img src="/Mainphotos/5.jpeg" className="card-img-top" alt="..." /></a></div>
                    <div className="card-body">
                      <h3 className="card-title">月訂閱制</h3>
                      <p className="card-text">NT $3380</p>
                      <p className="card-text">精選4-6種水果<br />嚴選在地小農</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 g-2">
                    <div className="figure"><a href="#/"><img src="/Mainphotos/5.jpeg" className="card-img-top" alt="..." /></a></div>
                    <div className="card-body">
                      <h3 className="card-title">季訂閱制</h3>
                      <p className="card-text">NT $3780</p>
                      <p className="card-text">精選4-6種水果<br />嚴選在地小農</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 g-2">
                    <div className="figure"><a href="#/"><img src="/Mainphotos/5.jpeg" className="card-img-top" alt="..." /></a></div>
                    <div className="card-body">
                      <h3 className="card-title">半年訂閱制</h3>
                      <p className="card-text">NT $4080</p>
                      <p className="card-text">精選4-6種水果<br />嚴選在地小農</p>
                    </div>      
                </div>         
            </div>
        </div>
      </main>
    </>
    ) 
}

export default Main