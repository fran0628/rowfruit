import React from 'react'
import { Link } from 'react-router-dom'


function SubscribeItem(props) {
    const { id, product_name, fruit_item, price } = props
    // 訂閱制價格
    const monthprice = price * 4 
    const seasonprice = (price * 4)* 0.9
    const halfyearprice = (price * 4)* 0.8

    // 水果盒內容
    const fruitcontent = fruit_item.split(/\s+/);

    // button 連結
    const urlid = String(id)
    const url = "/Mainproduct/"+ urlid
    
    return (
        <>
            <div className="col-lg-12 g-2 mb-3">
                <div className="row">
                    <div className="subleftimg col-xl-6 g-3">
                        <div className="figure"><a href="#/"><img src="/Mainphotos/2.png" className="card-img-top" alt="..." /></a></div>
                        <div className="card-body">
                            {/* <h3 className="card-title fs-6">{fruit_item}</h3> */}
                        </div> 
                    </div>
                    <div className="col-xl-5 ms-lg-5 mt-5">
                            <h3 className="card-title fs-5">{product_name}水果盒</h3>
                            <p className="card-title" style={{fontSize: "17px"}}>{fruitcontent[0]} &nbsp; {fruitcontent[1]} &nbsp; {fruitcontent[2]}</p>
                            <p className="card-title" style={{fontSize: "17px"}}>{fruitcontent[3]} &nbsp; {fruitcontent[4]} &nbsp; {fruitcontent[5]}</p>
                            <h5 className="card-title fs-5">訂閱方案</h5>
                            <p className="card-text" style={{fontSize: "17px"}}>月訂閱制方案 月付NT${monthprice}（享有每週<span className="text-danger">免運</span>服務）</p>
                            <p className="card-text" style={{fontSize: "17px"}}>季訂閱制方案 月付NT${seasonprice} (享有水果盒原價<span className="text-danger">9折</span>優惠)</p>
                            <p className="card-text" style={{fontSize: "17px"}}>半年訂閱制方案 月付NT${halfyearprice} (享有水果盒原價<span className="text-danger">8折</span>優惠)</p>
                            <button className="buy-btnbuy me-4">點此直接訂閱</button>
                            <Link to={url}><button className="normal-buy-btn">點此查看水果盒</button></Link>
                    </div>
                </div>
            </div> 
        </>
    )

}

export default SubscribeItem
