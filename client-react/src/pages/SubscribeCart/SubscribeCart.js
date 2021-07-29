import React, { useState } from 'react'
import "./SubscribeCart.scss"
import RadioBox from './RadioBox'


function SubscribeCart() {
    const [boxOption, setBoxOption] = useState('')
    const [timeOption, setTimeOption] = useState('')
    const boxList = ['美白水果盒','健身水果盒','多纖輕盈水果盒']
    const timeList = ['月訂閱製','季訂閱製','年訂閱製']
    // console.log(boxOption)
    // console.log(timeOption)
    
    // const total = [boxOption,timeOption]
    // console.log(total) 
  
  var subboxPrice;
  var subboxTime; 
  
  switch (boxOption) {
    case '美白水果盒':
      subboxPrice = 400;
      break;
    case '健身水果盒':
      subboxPrice = 500;
      break;
    case '多纖輕盈水果盒':
      subboxPrice = 600;
      break;
    default:
      subboxPrice = 0;
  }

  switch (timeOption) {
    case '月訂閱製':
      subboxTime = subboxPrice * 4;
      break;
    case '季訂閱製':
      subboxTime = subboxPrice * 4 * 0.9;
      break;
    case '年訂閱製':
      subboxTime = subboxPrice * 4 * 0.8;
      break;
    default:
      subboxTime = 0;
  }
  
  

  // function totalPrice(){
  //   console.log(subboxTime)
  // }

    return (
      <>  
        <div class="subbackground">
          <div class="container">
              <div class="subcard row m-5">
                  <div class="pricesheet col-3 text-center mt-4">
                      <h4>水果盒價目表</h4>
                      <h5 class="account">選擇水果盒</h5> 
                      {boxList.map((v, i) => {
                        return (
                          <RadioBox
                            key={i}
                            value={v}
                            checkedValue={boxOption}
                            setCheckedValue={setBoxOption}
                          />
                        )
                      })} 
                      <h5 class="account">水果盒單盒原價：<span class="text-danger">＄{subboxPrice}</span></h5>   
                      <h5 class="account">選擇訂閱方案</h5> 
                      {timeList.map((v, i) => {
                        return (
                          <RadioBox
                            key={i}
                            value={v}
                            checkedValue={timeOption}
                            setCheckedValue={setTimeOption}
                          />
                        )
                      })} 
                      {/* <button className="btn btn-light" onClick={totalPrice}>點我查詢</button> */}
                      <h5 class="account">搭配方案每月：<span class="text-danger">＄{subboxTime}</span></h5>    
                  </div>
                  <div class="col-3">
                      <div class="selectbox card">
                          <img src="/Mainphotos/4.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">美白水果盒</h5>
                            <div class="my-3">
                              <button type="button" class="btn">月訂閱製</button>
                              <button type="button" class="btn">季訂閱製</button>
                              <button type="button" class="btn">半年訂閱製</button>
                            </div>
                            <button class="subscribe-btn">點我結帳</button>
                          </div>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="selectbox card">
                          <img src="/Mainphotos/5.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">健身水果盒</h5>
                            <div class="my-3">
                              <button type="button" class="btn">月訂閱製</button>
                              <button type="button" class="btn">季訂閱製</button>
                              <button type="button" class="btn">半年訂閱製</button>
                            </div>
                            <button class="subscribe-btn">點我結帳</button>
                          </div>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="selectbox card">
                          <img src="/Mainphotos/6.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">多纖輕盈水果盒</h5>
                            <div class="my-3">
                              <button type="button" class="btn">月訂閱製</button>
                              <button type="button" class="btn">季訂閱製</button>
                              <button type="button" class="btn">半年訂閱製</button>
                            </div>
                            <button class="subscribe-btn">點我結帳</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>      
      </>
    )

}

export default SubscribeCart