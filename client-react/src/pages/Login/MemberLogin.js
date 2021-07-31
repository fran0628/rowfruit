// import axios from "axios";
import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
import "./MemberLogin.scss";


const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function MemberLogin(props) {
  const { setAuth, data, setData, setShowdata } = props;

  const [account, setAccount] = useState("");

  function accountChange(e) {
    setAccount(e.target.value);
  }

  const [password, setPassword] = useState("");

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function loginSubmit() {
    setShowdata(true);
    setData(() => {
      const newData = { ...data };
      newData.account = account;
      newData.password = password;
      return newData;
    });
    console.log("loginSubmit :", loginSubmit)
  }

  // const [isLoading, setIsLoading] = useState(false);
  // // 自動1秒後關閉指示的spinner
  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => setIsLoading(false), 1000);
  //   }
  // }, [isLoading]);
  // // 狀態變為物件，處理多個欄位
  // // const [fields, setFields] = useState({
  // //   username: '',
  // //   password: '',
  // // })

  // ex. 送到伺服器
  // function sucessLogin() {
  //   setAuth("Steven");
  // }

  function loginApi() {
    // let data = { account: 123456, password: 123456 };

    // axios
    //   .post(`http://localhost:5000/api/login`, data)

    //   .then((res) => {
    //     localStorage.setItem("token", res.data.data.token);
    //     // token解析
    //     const token = res.data.data.token.split(" ")[1];

    //     let payload = JSON.parse(atob(token.split(".")[1]));

    //     console.log("res=>", payload);
    //     console.log(res.data.data.name);
    //   });

    let url = "http://localhost:5000/api/login";
    let data = { account: "666666", password: "666666" };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        // token解析
        const token = result.data.token.split(" ")[1];

        let payload = JSON.parse(atob(token.split(".")[1]));

        // console.log("res :",res)

        console.log("res=>", payload);
        console.log(result.data.name);
      });

    // .catch((error) => console.error("Error:", error))
    // .then((response) => console.log("Success:", response));
  }

  // const loading = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // );

  return  (
    <form>
      {/* <button onClick={changeLogin}>我會改變login</button> */}
      <div className="MemberBanner" style={banner}>
        {/* Login  Form */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-8 my-3">
              <div className="card shadow">
                <div className="MemberCardLogo text-center border-bottom">
                  {/* ROWFRUIT*/}
                  <img className="87 p-3" src="MemberPhoto/logo.svg" alt="" />
                </div>
                <div className="MemberBody">
                  <h3 className="NormalMemberLogin d-flex justify-content-center mb-3">
                    一般會員登入
                  </h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        帳號
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="account"
                        value={account}
                        placeholder="Account"
                        onChange={accountChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        密碼
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={passwordChange}
                        minLength="6"
                        maxLength="8"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label htmlFor="remember">記住使用者帳號</label>
                    </div>
                    <div className="d-none d-sm-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn normal-btn"
                        onClick={loginSubmit}
                        >
                        登入
                      </button>
                    </div>
                    <div className=" d-sm-none my-2">
                      <button type="button" className="btn rwd-btn">
                        登入
                      </button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <label className="sign-up mx-4">
                        <a className="MemberSignup" href="memberegister">
                          立即註冊
                        </a>
                      </label>
                      <label className>|</label>
                      <label className="ForgotPWD mx-4">
                        <a href="member_forgotpassword.html">忘記密碼</a>
                      </label>
                    </div>
                    {/* <div className="d-flex justify-content-center mb-1">
                <h5 className="FastDoLogin">快速登入</h5>
              </div>
              <div className="d-flex justify-content-center mb-2 " type="button">
                <img className="mx-3" src="MemberPhoto/GOOGLE.png" alt="" />
                <img className="mx-3" src="MemberPhoto/facebook.png" alt="" />
              </div> */}
                    <div className="d-flex justify-content-center mb-2">
                      <a className="back-farmerlogin" href="farmer_login.html">
                        <h5 className="BackFarmerlogin">切換為小農登入頁面</h5>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  
}
export default MemberLogin;
