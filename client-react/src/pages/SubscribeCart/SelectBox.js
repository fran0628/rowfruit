import React , { useState } from 'react'

function SelectBox(props) {
    const {id, product_name, images} = props
    const [subscribe_way, setSubscribe_way] = useState(0);
    function checkOut() {
        const subData = {id: id, subscribe_way: subscribe_way}
        // const SubCart = JSON.parse(localStorage.getItem("Subcart")) || [];
        // SubCart.push(subData);
        localStorage.setItem("subData", JSON.stringify(subData));
    }
    // console.log(id)
    // console.log(subscrib_way)
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
                <button class="subscribe-btn" onClick={checkOut}>點我結帳</button>
                </div>
            </div>
        </div>
    </>
    )

}

export default SelectBox