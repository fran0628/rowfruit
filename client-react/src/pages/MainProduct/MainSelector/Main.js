import React, { useEffect, useState } from 'react'
import { apiMain } from '../../../config/API'
import './Main.scss'
import MainFruitbox from './MainFruitbox/MainFruitbox'
import Subscribe from './Subscribe/Subscribe'

async function productData(setData) {
  const res = await fetch(apiMain)
  const apidata  = await res.json()
  setData(apidata);
}

function Main() {

  const [data, setData] = useState([]);
  useEffect(() => {
    productData(setData)
  }, []) 
  // console.log(data)
  
  const filterdata = data.filter(function(item, index, array){
    return item.id < 10 ;
  });
  
  /* Subscribe */
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
        {/*視覺圖*/} 
        <div className="container">
            <div className="container row m-0">
                <div className="rwd_slider_container_wrapper  col-lg-7 col-md-7 p-0">
                    <div className="rwd_slider_container">    
                        <div className="slider_container">
                            <div><img src="/Mainphotos/28.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/20.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/6.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/4.jpg" alt="" /></div>
                            <div><img src="/Mainphotos/17.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="sliderword col-lg-4 col-md-4">
                </div>
            </div>
        </div>
        {/*水果盒*/}
        <MainFruitbox
          data = {filterdata} 
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