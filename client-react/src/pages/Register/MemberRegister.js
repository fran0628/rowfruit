import React, { useState } from "react";
import "./MemberRegister.scss";
import axios from 'axios'



const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};


export default function MemberRegister(props) { 
  const {register,setRegister} = props

  const [fullname, setFullname ] = useState("")

  function fullnameChange (e) {
    setFullname(e.target.value)
  }

  const [account, setAccount ] = useState("")

  function accountChange (e){
    setAccount(e.target.value)
  }
  const [password, setPassword ] = useState("")

  function passwordChange (e){
    setPassword(e.target.value)
  }
  const [repassword, setRepassword ] = useState("")

  function rePasswordChange (e){
    setRepassword(e.target.value)
  }
  const [email, setEmail ] = useState("")

  function emailChange (e){
    setEmail(e.target.value)
  }

  console.log(`${fullname},${account},${password},${repassword},${email}`)

  function formData() {
     setRegister(() => {
      const newData = { ...register };
      console.log("newData :",newData)
      newData.fullname = fullname;
      newData.account = account;
      newData.password = password;
      newData.repassword = password;
      newData.email = email;
      return newData;
    }, 
    
   );
   

   
    
}

  return (
    <div className="MemberBanner" style={banner}>
      <div className="container ">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-sm-8 mb-3 my-3">
            <div className="card shadow">
              <div className="MemberCardLogo text-center border-bottom">
                <img className="p-3" src="MemberPhoto/logo.svg" alt="" />
              </div>
              <div className="MemberBody">
                <form>
                  <h3 className="MemberRegister d-flex justify-content-center  mb-3">
                    會員註冊
                  </h3>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={fullnameChange}
                      placeholder="姓名"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="account"
                      value={account}
                      onChange={accountChange}
                      placeholder="帳號"
                      required
                    />
                    
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={passwordChange}
                      placeholder="密碼"
                      minLength="6"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="repassword"
                      value={repassword}
                      onChange={rePasswordChange}
                      minLength="6"
                      placeholder="請再次確認密碼"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={emailChange}
                      placeholder="電子信箱"
                      required
                    />
                  </div>
                  <div className="d-none d-sm-flex justify-content-center  my-4">
                    <button type="button" className="btn normal-btn"
                    onClick={formData}
                    >
                      送出
                    </button>
                  </div>
                  <div className=" d-sm-none my-4">
                    <button type="button" className="btn rwd-btn"
                    >
                      送出
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                    <a className="back-login" href="memberlogin">
                      <h5 className="back-login">已經有帳號了? 登入</h5>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
