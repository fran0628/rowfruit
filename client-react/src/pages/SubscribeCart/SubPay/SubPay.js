import React, { useState, useEffect } from "react";
import './SubPay.scss';
import SubOne from './SubStep/SubOne'
import SubTwo from './SubStep/SubTwo'
import SubFour from './SubStep/SubFour'
import { withRouter } from "react-router-dom";
import axios from "axios";

function SubPay(props) {
    const { isLogin } = props

    // localstorage
    const [subCart, setSubCart] = useState([]);
    function getCartFromLocalStorage() {
        const newSubCart = localStorage.getItem("subData") || "[]";
        setSubCart(JSON.parse(newSubCart));
    }
    useEffect(() => {
        getCartFromLocalStorage();
        if (isLogin.islogin) {
            getUserDetail();
          }
    }, []);


    // 會員
    //初始化會員資料
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        phone: "",
        address: "",
    });
    //解析token
    async function getUserDetail() {
    const token = localStorage.getItem("token").split(" ")[1];

    let payload = JSON.parse(atob(token.split(".")[1]));
    let res = await axios.get("http://localhost:5000/api/member/" + payload.id);
    const data = res.data[0];
    setUserData({
        id: data.id,
        name: data.name,
        phone: data.phone,
        address: data.address,
    });
    }
    // console.log(userData)


    //初始化在第一步驟
    const [step, setStep] = useState(1);
  
      
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
            {step===1 && <SubOne setStep={setStep} subCart={subCart} userData={userData}/>}
            {step===2 && <SubTwo setStep={setStep} subCart={subCart}/>}
            {step===4 && <SubFour setStep={setStep} subCart={subCart}/>}
        </div>
        </>
    );
}

export default withRouter(SubPay)