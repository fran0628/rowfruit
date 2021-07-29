import React, { useState} from "react";
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

export default function MemberLogin(props) {
  const {setAuth}=props
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data.get("account"));
    console.log(data.get("password"));

    // ex. 送到伺服器
  };
  function changeLogin(){
    setAuth("Steven")
  }

  return (
    <div>
      <button onClick={changeLogin}>我會改變login</button>
      <div className="MemberBanner" style={banner}>
        {/* Login  Form */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-8 my-3">
              <div className="card shadow">
                <div className="MemberCardLogo text-center border-bottom">
                  {/* ROWFRUIT*/}
                  <img className="logo p-3" src="MemberPhoto/logo.svg" alt="" />
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
                        className="form-control"
                        type="text"
                        name="account"
                        value={account}
                        placeholder="Account"
                        onChange={(e) => {
                        setAccount(e.target.value);
                      }}
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
                        value={password}
                        placeholder="Password"
                        onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                      <button type="submit" className="btn normal-btn">
                        登入
                      </button>
                    </div>
                    <div className=" d-sm-none my-2">
                      <button type="submit" className="btn rwd-btn">
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
    </div>
  );
}
