import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./SubscribeCart.scss"
import CheckBox from './CheckBox'
import SelectBox from './SelectBox'
import { apiMain } from '../../config/API'


async function productData(setData) {
  
  const res = await fetch(apiMain)
  const apidata  = await res.json()
  setData(apidata);
}

function SubscribeCart() {
  
  //水果盒價目表
  const [boxOption, setBoxOption] = useState('')
  const [timeOption, setTimeOption] = useState('')
  const boxList = ['美白水果盒','健身水果盒','多纖輕盈水果盒']
  const timeList = ['月訂閱製','季訂閱製','年訂閱製']
  var subboxPrice;
  var subboxTime; 

  //引入資料
  const [data, setData] = useState([]);
  useEffect(() => {
    productData(setData)
  }, []) 

  const filterdata = data.filter(function(item, index, array){
    return item.id < 10 ;
  });
  
  
  
    return (
      <>  
        <div class="subbackground">
          <div class="container">
              <div class="subcard row m-5">
              <Link to="/Main"><button class="btn normalback-btn"><i class="fas fa-arrow-left me-2"></i>返回</button></Link>
                  <div class="pricesheet col-3 text-center mt-4">
                      <h4>水果盒價目表</h4>
                      <h5 class="account">選擇水果盒</h5> 
                      {boxList.map((v, i) => {
                        return (
                          <CheckBox
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
                          <CheckBox
                            key={i}
                            value={v}
                            checkedValue={timeOption}
                            setCheckedValue={setTimeOption}
                          />
                        )
                      })} 
                      <h5 class="account">搭配方案每月：<span class="text-danger">＄{subboxTime}</span></h5>    
                  </div>
                  {filterdata.map((item) => {
                    const { id, product_name, images } = item;
                    return (
                    <SelectBox
                        key={id}
                        id={id}
                        product_name={product_name}
                        images={images}
                    />
                    );
                })}  
              </div>
          </div>
        </div>      
      </>
    )

}

export default SubscribeCart