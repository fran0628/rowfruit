// import axios from "axios";
import React, { useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./MemberLogin.scss";

// import Background from '../../../banner.png';
// const [member,setMember]=useState()

// useEffect(()=>{
//   async function member(set) {
//     const res = await fetch('localhost:/5000/api/member')
//     const apidata  = await res.json()
//     set(apidata);
// },[])

const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function MemberLogin(props) {
  const { setAuth } = props;
  const [account, setAccount] = useState("");

  function accountChange(e) {
    setAccount(e.target.value);
  }

  const [password, setPassword] = useState("");

  function passwordChange(e) {
    setPassword(e.target.value);
  }
  // const [login, setLogin] = useState([]);

  // function loginChange() {
  //   account:"111111",
  //   password:"111111"
  // }


  const [isLoading, setIsLoading] = useState(false)
  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])
  // 狀態變為物件，處理多個欄位
  const [fields, setFields] = useState({
    username: '',
    password: '',
  })

  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = new FormData(e.target);

    console.log(user.get("account"));
    console.log(user.get("password"));

    // 整個表單有任何變動(ex.某個欄位有輸入)
  // 認為使用者正在改有錯誤的欄位
  // 清除某個欄位的錯誤訊息
 

    // ex. 送到伺服器
  };
  function changeLogin() {
    setAuth("Steven");
  }

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
    let data = { account: '123456', password: '123456' };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json",

      }),
    })
      .then( res => {
        return res.json();
      }).then(result => {
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

  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.value)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    // e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(updatedFieldErrors)
  }
  
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    // <button onClick={changeLogin}>我會改變login</button>
    <form
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      onInvalid={handleFormInvalid}
    >
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        帳號
                      </label>
                      <input
                        className={`form-control ${
                          fieldErrors.account !== "" ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="account"
                        setState={handleFieldChange}
                        value={fields.account}
                        placeholder="Account"
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        密碼
                      </label>
                      <input
                        className={`form-control ${
                          fieldErrors.password !== "" ? "is-invalid" : ""
                        }`}
                        type="password"
                        name="password"
                        state={fields.password}
                        setState={handleFieldChange}
                        error={fieldErrors.password}
                        placeholder="Password"
                        onChange={handleFieldChange}
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
                      <label htmlFor="remember">Remeber Me</label>
                    </div>
                    <div className="d-none d-sm-flex justify-content-center">
                      <button type="submit" className="btn normal-btn"
                      onClick={loginApi}>
                        登入
                      </button>
                    </div>
                    {/* <button
                      type="button"
                      onClick={() => {
                        checkLogin();
                      }}
                      className="btn btn-primary"
                    >
                      檢查登入狀態
                    </button> */}
                    <div className=" d-sm-none my-2">
                      <button type="submit" className="btn rwd-btn"
                      onClick={loginApi}>
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
              <div className="d-flex justify-content-center mb-2">
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
   return (
    <>
      {/* <h1>會員登入</h1> */}
      <hr />
      {isLoading ? loading : display}
    </>
  )
}
export default withRouter(MemberLogin);
