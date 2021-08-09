import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";

function SelectBox(props) {
    const {id, product_name, images} = props
    const [subscribe_way, setSubscribe_way] = useState(0);
    const urlsub = "/subpay"
    
    
    function checkOut() {
        if (subscribe_way===""){
            Swal.fire({
                title: "您還沒選擇商品",
                confirmButtonText: "關閉",
              });
        }else {
            const subData = [{product_id: id, product_name: product_name, images: images, subscribe_way: subscribe_way}]
            // const SubCart = JSON.parse(localStorage.getItem("Subcart")) || [];
            // SubCart.push(subData);
            localStorage.setItem("subData", JSON.stringify(subData));
        }
    }
    
        
    return (
    <>
        <div class="col-3">
            <div class="selectbox card">
                <img src={images} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">{product_name}水果盒</h5>
                <div class="my-3">
                    <button type="button" className={"btn addsubcart-btn" + (subscribe_way===1 ? " active" : "")} onClick={(e)=>{setSubscribe_way(1)}}>月訂閱製</button>
                    <button type="button" className={"btn addsubcart-btn" + (subscribe_way===3 ? " active" : "")} onClick={(e)=>{setSubscribe_way(3)}}>季訂閱製</button>
                    <button type="button" className={"btn addsubcart-btn" + (subscribe_way===6 ? " active" : "")} onClick={(e)=>{setSubscribe_way(6)}}>半年訂閱製</button>
                </div>
                <Link to={urlsub}><button class="subscribe-btn" onClick={checkOut}>點我結帳</button></Link>
                </div>
            </div>
        </div>
    </>
    )

}

export default SelectBox