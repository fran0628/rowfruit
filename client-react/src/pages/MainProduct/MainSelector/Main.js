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

const filterdata = data.filter(function(item, index, array){
  return item.id < 10 ;
});

console.log(filterdata)
  

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
                  <img src="/Mainphotos/18.png" alt="" />
                  <p className="text-center fs-5">
                    全新水果生活
                  </p>
                  <p className="text-center fs-5">
                    ROWFRUIT為您配送
                  </p>
                  <p className="text-center fs-5">
                    訂閱制水果盒
                  </p>
                  <p className="text-center fs-6">
                  每週各式新鮮水果 ｜｜ 貼心到府服務
                  </p>
                </div>
            </div>
        </div>
        <div className="orange">
          <img src="/Mainphotos/orange.png" alt="" />
        </div>
        {/*訂閱方案說明文*/}
        <div className="container">
            <h3 className="fw-normal text-center">選擇適合自己的購買方案</h3>
            <p className="text-center fs-6">
                體驗一箱僅配送一次 單買約 1 - 2 周時間寄出，假日不可以收貨者請先備註
            </p>
            <p className="text-center fs-6">
                訂閱制(月訂閱制/季訂閱制/半年訂閱制)之後為每週一至週三出貨( 週一至週四間配送 )
            </p>
        </div> 
        {/*水果盒*/}
        <MainFruitbox
          data = {filterdata} 
        />
        {/*訂閱方案介紹*/} 
        <Subscribe
          data = {filterdata} 
        />
      </main>
    </>
    ) 
}

export default Main