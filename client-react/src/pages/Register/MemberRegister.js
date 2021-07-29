import React, { useState,useEffect } from "react";
import "./MemberRegister.scss";
import axios from 'axios'



const banner = {
  backgroundImage: `url(${"MemberPhoto/banner.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default function MemberRegister() {

  const [fields, setFields] = useState({
    fullname: "",
    account: "",
    password: "",
    repassword: "",
    email: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    email: "",
  });

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };

    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // 以下需要有name屬性
    console.log(data.get("fullname"));
    console.log(data.get("account"));
    console.log(data.get("password"));
    console.log(data.get("repassword"));
    console.log(data.get("email"));

    // 以下是直接從狀態獲取
    console.log(fields.fullname);
    console.log(fields.account);
    console.log(fields.password);
    console.log(fields.repassword);
    console.log(fields.email);

    // ex. 送到伺服器
  };

  // 整個表單有任何變動(ex.某個欄位有輸入)
  // 認為使用者正在改有錯誤的欄位
  // 清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log("更新欄位: ", e.target.name);

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };

    setFieldErrors(updatedFieldErrors);
  };

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldErrors(updatedFieldErrors);
  };

  // let Api = axios({
  //   method: 'post',
  //   baseURL: 'http://localhost:5000',
  //   url: '/api/member',
  //   'Content-Type': 'application/json',
  // })
    // .then((result) => { console.log(result.data) })
    // .catch((err) => { console.error(err) })

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
                <form
                  onSubmit={handleSubmit}
                  onChange={handleFormChange}
                  onInvalid={handleFormInvalid}
                >
                  <h3 className="MemberRegister d-flex justify-content-center  mb-3">
                    會員註冊
                  </h3>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      value={fields.fullname}
                      placeholder="姓名"
                      onChange={handleFieldChange}
                      required
                    />
                      {fieldErrors.fullname !== "" && (
                      <small className="text-danger form-text">
                        {fieldErrors.fullname}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="account"
                      value={fields.account}
                      placeholder="帳號"
                      onChange={handleFieldChange}
                      required
                    />
                     {fieldErrors.account !== "" && (
                      <small className="text-danger form-text">
                        {fieldErrors.account}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={fields.password}
                      placeholder="密碼"
                      minLength="6"
                      onChange={handleFieldChange}
                      required
                    />
                     {fieldErrors.password !== "" && (
                      <small className="text-danger form-text">
                        {fieldErrors.password}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="repassword"
                      value={fields.repassword}
                      minLength="6"
                      placeholder="請再次確認密碼"
                      onChange={handleFieldChange}
                      required
                    />
                     {fieldErrors.repassword !== "" && (
                      <small className="text-danger form-text">
                        {fieldErrors.repassword}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={fields.email}
                      placeholder="電子信箱"
                      onChange={handleFieldChange}
                      required
                    />
                    {fieldErrors.email !== "" && (
                      <small className="text-danger form-text">
                        {fieldErrors.email}
                      </small>
                    )}
                  </div>
                  <div className="d-none d-sm-flex justify-content-center  my-4">
                    <button type="submit" className="btn normal-btn"
                    >
                      送出
                    </button>
                  </div>
                  <div className=" d-sm-none my-4">
                    <button type="submit" className="btn rwd-btn"
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
