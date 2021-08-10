import React, { useState, useEffect } from "react";
import './SubPay.scss';
import SubOne from './SubStep/SubOne'
import SubTwo from './SubStep/SubTwo'
import SubFour from './SubStep/SubFour'
import { withRouter } from "react-router-dom";
import axios from "axios";

function SubPay(props) {
    const { isLogin } = props

    //初始化會員資料
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        phone: "",
        address: "",
    });

    // post出去資料格式初始化
    const [subOrder, setSubOrder] = useState({
        user_id: 0,
        product_id: 0,
        subscribe_way: 0,
        receiver: "",
        phone: "",
        address: "",
    });
   
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

    // 解析token
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
        setSubOrder({
            memberId: data.id,
            product_id: 0,
            subscribe_way: 0,
            receiver: "",
            phone: "",
            address: "",
        });
    }

    // 初始化
    const [step, setStep] = useState(1);
      
    // 運費
    const [transport, setTransport] = useState("150,黑貓宅急便");

    // 設定輸入會員資料
    const [receiver, setReceiver] = useState("");
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState("");

    return (
        <>
        <div class="container">
            <div class="container mt-5 d-flex justify-content-center">
            {step === 1 ? (<div class="cartlist" style={{ background: "#dde4df" ,border:"3px solid #ccc" }}>01 確認明細及選擇配送方式</div>) :(<div class="cartlist">01 確認明細及選擇配送方式</div>)}
                <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
                {step === 2 ? (<div class="cartlist" style={{ background: "#dde4df" ,border:"3px solid #ccc" }}>02 選擇付款方式</div>):(<div class="cartlist">02 選擇付款方式</div>)}
                <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
                {step === 4 ? (<div class="cartlist" style={{ background: "#dde4df" ,border:"3px solid #ccc" }}>03 購物完成</div>):(<div class="cartlist">03 購物完成</div>)}
            </div>
            {step===1 && <SubOne setStep={setStep} subCart={subCart} userData={userData} transport={transport} setTransport={setTransport} receiver={receiver} setReceiver={setReceiver} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress} subOrder={subOrder} setSubOrder={setSubOrder}
            />}

            {step===2 && <SubTwo setStep={setStep} subCart={subCart} userData={userData} transport={transport} receiver={receiver} phone={phone} address={address} subOrder={subOrder} setSubOrder={setSubOrder}/>}

            {step===4 && <SubFour setStep={setStep} subCart={subCart}/>}
        </div>
        </>
    );
}

export default withRouter(SubPay)