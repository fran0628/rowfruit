import React from 'react'

function SelectBox(props) {
    const {id, product_name, images} = props

    function checkOut() {
        
    }

    return (
        <>
        <div class="col-3">
            <div class="selectbox card">
                <img src={images} class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">{product_name}水果盒</h5>
                <div class="my-3">
                    <button type="button" class="btn addsubcart-btn">月訂閱製</button>
                    <button type="button" class="btn addsubcart-btn">季訂閱製</button>
                    <button type="button" class="btn addsubcart-btn">半年訂閱製</button>
                </div>
                <button class="subscribe-btn" onClick={checkOut}>點我結帳</button>
                </div>
            </div>
        </div>
    </>
    )

}

export default SelectBox