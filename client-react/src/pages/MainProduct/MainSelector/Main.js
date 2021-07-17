import React from 'react'
import './Main.scss'
import MainFruitbox from './MainFruitbox/MainFruitbox'
import Subscribe from './Subscribe/Subscribe'

function Main(){

  // MainFruitbox
  // 每個產品的名稱
  const fruitboxnameList = {
    FruitboxOne: '美白水果盒',
    FruitboxTwo: '健身水果盒',
    FruitboxThree: '輕盈水果盒',
  }

  // 代表每個產品的單價
  const fruitboxpriceList = {
    FruitboxOne: 500,
    FruitboxTwo: 500,
    FruitboxThree: 500,
  }

  // 每個產品的圖片
  const fruitboxpictureList = {
    FruitboxOne: '/Mainphotos/1.jpg',
    FruitboxTwo: '/Mainphotos/2.jpg',
    FruitboxThree: '/Mainphotos/3.jpg',
  }

  //Subscribe
  const subscribeList = {
    SubscribeOne: '體驗一箱',
    SubscribeTwo: '月訂閱制',
    SubscribeThree: '季訂閱制',
    SubscribeFour: '半年訂閱制',
  }

  const subscribePrice = {
    SubscribeOne: 500,
    SubscribeTwo: 1800,
    SubscribeThree: 4800,
    SubscribeFour: 8400,
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
          fruitboxpriceList={fruitboxpriceList}
          fruitboxnameList={fruitboxnameList}
          fruitboxpictureList={fruitboxpictureList}
        />
        {/*訂閱方案說明文*/}
        <div className="container">
            <h1 className="display-6 fw-normal text-center">選擇適合自己的購買方案</h1>
            <p className="text-center">
                現在下訂會收到『 六月ROWFRUIT水果箱 』<br />
                本次出貨時間為 2021 / 6 / 26 <br />
                體驗一箱僅配送一次 <br />
                訂閱制(月訂閱制/季訂閱制/半年訂閱制)之後為每月10日出貨(遇假日順延) <br />
            </p>
        </div> 
        {/*訂閱方案介紹*/} 
        <Subscribe
          subscribeList={subscribeList}
          subscribePrice={subscribePrice}
        />
      </main>
    </>
    ) 
}

export default Main