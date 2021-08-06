import React, { useState, useEffect } from "react";
import './SubPay.scss';
import SubItem from './SubItem';
import SubCheck from './SubCheck';
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

function SubPay() {
    const [subCart, setSubCart] = useState([]);
    function getCartFromLocalStorage() {
        const newSubCart = localStorage.getItem("subData") || "[]";
        setSubCart(JSON.parse(newSubCart));
    }
    useEffect(() => {
        getCartFromLocalStorage();
    }, []);

    // 會員
    const [userData, setUserData]=useState({
        id:"",
        account:"",
        name:"",
        password:"",
        confirmPassword:"",
        email:"",
        phone:"",
        address:"",
        avatar:"",
        password_has_error:false,
        file:null
      })
    function getUserDetail(){
    const token = localStorage.getItem('token').split(" ")[1];
    
    let payload = JSON.parse(atob(token.split(".")[1]));
    axios.get('http://localhost:5000/api/member/'+payload.id)
    
    .then((res) => {
        console.log(res.data[0]);
        const data = res.data[0];
        setUserData({
        id:data.id,
        account:data.account,
        name:data.name,
        password:data.password,
        confirmPassword:data.password,
        email:data.email,
        phone:data.phone,
        address:data.address,
        file:data.file,
        avatar:data.avatar
    })
    })
    }
      
    return (
        <>
        <div class="container">
            <div class="container mt-5 d-flex justify-content-center">
                <div class="cartlist">01 確認明細及選擇配送方式</div>
                <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
                <div class="cartlist">02 選擇付款方式</div>
                <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
                <div class="cartlist">03 購物完成</div>
            </div>
                <div class="container row mt-5">
                <div class="col-md-7 me-5">
                    <div class="d-flex flex-column ">
                    <div>
                        <div class="subinfo">訂單資訊</div>
                        <table class="table subtable mt-5">
                            <thead>
                            <tr>
                                <th><span>商品圖片</span></th>
                                <th><span>商品名稱</span></th>
                                <th><span>訂閱時間</span></th>
                                <th><span>月繳金額</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {subCart.map((item, index) => {
                                const {
                                product_id,
                                product_name,
                                subscribe_way,
                                images,
                                } = item;
                                return (
                                <SubItem
                                    key={product_id}
                                    productId={product_id}
                                    product_name={product_name}
                                    images={images}
                                    subscribe_way={subscribe_way}
                                />
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="subinfo">配送資訊</div>
                        <div class="subinfoway"><span>請選擇配送方式</span></div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>黑貓宅急便</option>
                            <option value="1">7-11取貨</option>
                        </select>
                        <div class="my-2">
                            <label for="exampleFormControlInput1" class="form-label"><span>收貨人</span></label>
                            <input type="text" class="form-control" placeholder="請輸入名字" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><span>手機號碼</span></label>
                            <input type="text" class="form-control" placeholder="請輸入手機號碼" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">電子信箱</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="請輸入電子信箱" />
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 ms-2">
                    {subCart.map((item, index) => {
                        const {
                        product_id,
                        subscribe_way,
                        } = item;
                        return (
                        <SubCheck
                            key={product_id}
                            productId={product_id}
                            subscribe_way={subscribe_way}
                        />
                        );
                    })}       
                </div>
                </div>
                <div class="container back">
                <Link to="/subscribecart"><button class="btn normalback-btn mt-5"><i class="fas fa-arrow-left me-2"></i>返回</button></Link>
                </div>
            </div>
        </>
    );
}

export default withRouter(SubPay)