import { useState } from "react";
import "./About.scss";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
export default function About() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("false");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    // try {
    const res = await axios.post("http://localhost:5000/api/Mail", {
      name,
      mail,
      desc,
    });
    if (res.data) {
      function sweetAlert() {
        Swal.fire({
          title: "發信成功",
          text: "我們將會盡快回復您",
          animation: false,
          confirmButtonText: "關閉",
        });
      }
      sweetAlert();
    }
  };
  
  
  return (
    <>
      {/*banner*/}
      <section className="banner no-repeat">
        <div className="text-right container">
          <div className="row justify-content-end">
            <div className="col-12 col-lg-4">
              <h1 className="text-end text-dark ">
                <strong>
                  <strong>ROWFRUIT</strong>
                </strong>
              </h1>

              <p className="text-end h5 font-weight-bold text-dark lh-base">
                從驚喜出發&nbsp;
                <br />
                滿足日常營養所需&nbsp;
                <br />
                從驚喜出發&nbsp;
                <br />
                成為小農的協作平台
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*品牌故事*/}
      <section>
        <div className="container">
          <h1 className=" text-center text-dark">
            <strong>品牌故事</strong>
          </h1>
          <div className="row">
            <div className="col  ">
              <img src="/About/farmer.png" alt="ROWFRUIT" />
            </div>
            
            <div className="col  text-end">
              <h3 className=" font-weight-bold mb-4 ">
              <strong>您的水果專家已上線</strong>
                <br />
                <strong>為您嚴選一周水果所需</strong>
              </h3>

              <p className="h5 mt-4 pt-4 lh-base">
                &nbsp;一群年輕人
                <br />
                因為偶然之下遇見當地小農
                <br />
                才得知小農的銷售通路的辛酸
                <br />
                所以決定跟小農攜手打造這個網站&nbsp;
                <br />
                <br />
                有別於現代人對於水果的品質要求日益提升
                <br />
                加上現代人忙碌的工作型態營養攝取不平衡
                <br />
                我們提供的水果盒已經嚴格篩選最優質水果
                <br />
                最輕鬆的水果搭配以及最完美的營養所需
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*合作小農*/}
      <div className="container-fluid">
        <h1 className="text-center text-dark">
          <strong>合作小農</strong>
        </h1>

        <Carousel variant="dark">
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-75 "
                src="/About/mapn.png"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-75"
                src="/About/mapm.png"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-75"
                src="/About/maps.png"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/*聯絡我們*/}
      <div className="container-fluid">
      <h1 className="text-center text-dark">
        <strong>聯絡我們</strong>
      </h1>
      <div className="row justify-content-center px-5">
      <div className="d-flex">
        <div className="col-lg-5 col ">
          <div className="image-wrapper ">
            <img className="w-100" src="/About/MEMBERBAN.png" alt="ROWFRUIT" />
          </div>
        </div>
      <div className="row justify-content-center col">
      <form className="row g-3 mx-auto px-5 ml-4" onSubmit={handleSubmit}>
        <h3 className=" d-flex justify-content-center  font-weight-bold mb-3">
        <strong>請填寫資料，我們會盡快回復您</strong>
        </h3>
        <div className="d-flex justify-content-center">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="請輸入姓名"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="請輸入電子信箱"
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <textarea
            id="inputTextarea"
            className="form-control"
            row="3"
            name="desc"
            placeholder="請輸入留言"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        
        <div className="d-none d-sm-flex justify-content-center  my-4">
          <button type="submit" className="btn normal-btn">
            送出
          </button>
        </div>
        <div className=" d-sm-none my-4">
          <button type="submit" className="btn rwd-btn">
            送出
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}


