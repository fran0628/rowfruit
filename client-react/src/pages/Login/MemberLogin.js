import React from 'react';
import  './Login.scss';
// import Background from '../../../banner.png';


const banner = {
  backgroundImage: `url(${'MemberPhoto/banner.png'})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
  
};

export default function MemberLogin() {
  return (  
  <div>
  <div style= {banner}>
  {/* Login  Form */}
  <div className="container" >
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-8 my-3">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            {/* <h2 class="p-3">ROWFRUIT</h2> */}
            <img className="logo p-3" src="MemberPhoto/logo.svg" alt="" />
          </div>
          <div className="card-body">
            <h3 className="title d-flex justify-content-center mb-3">
                一般會員登入
            </h3>
            <form>
             
              <div className="mb-3">
                <label htmlFor="username" className="form-label">電子郵件</label>
                <input type="text" className="form-control" id="username" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">密碼</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required />
              </div>
              <div className="mb-3">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label htmlFor="remember">Remeber Me</label>
              </div>
              <div className="d-none d-sm-flex justify-content-center">
                <button type="button" className="btn normal-btn">登入</button>
              </div>
              <div className=" d-sm-none my-2">
                <button type="button" className="btn rwd-btn">登入</button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <label className="sign-up mx-4">
                  <a className="sign-up" href="member_singup.html">
                    立即註冊</a></label>
                <label className>|</label>
                <label className="forgot mx-4">
                  <a className="forgot" href="member_forgotpassword.html">忘記密碼</a>
                </label>
              </div>
              <div className="d-flex justify-content-center mb-1">
                <h5 className="fast-login">快速登入</h5>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <img className="mx-3" src="MemberPhoto/GOOGLE.png" alt="" />
                <img className="mx-3" src="MemberPhoto/facebook.png" alt="" />
              </div>
              <div className="d-flex justify-content-center mb-2">
                <a className="back-farmerlogin" href="farmer_login.html">
                  <h5 className="back-farmerlogin">切換為小農登入頁面</h5>
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