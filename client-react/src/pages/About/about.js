import React from "react";
import "./About.scss";

function About() {
  return (
    <>
      {/*banner*/}
      <section className="header7 banner" id="header7-1a">
        <div className="text-right container">
          <div className="row justify-content-end">
            <div className="col-12 col-lg-4">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-2 text-end text-dark">
              <strong><strong>ROWFRUIT</strong></strong>
              </h1>

              <p className="mbr-text mbr-fonts-style text-end h5 font-weight-bold text-dark">
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
      
        <div className="container">
          
            <h1 className=" text-center text-dark">
              <strong>品牌故事</strong>
            </h1>
          
          <div className="d-flex ">
            <div className="">
              
                <img src="/About/farmer.png" alt="ROWFRUIT" />
                
            </div>
            <div className="col-8 col-lg-8 ">
              <div className="text-wrapper ">
              <h3 className=" display-8 mt-7 ml-7 font-weight-light">
                  <strong>您的水果專家已上線</strong>
                  <div>
                    <strong>嚴選水果幫您搭配好,配送一周所需免煩惱</strong>
                  </div>
                </h3>
                <p className="mbr-text mbr-fonts-style display-8 h5">
                  &nbsp;一群年輕人,
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
        </div>
      
      {/*合作小農*/}
      <section className="slider2 cid-sB0dDzuCKT" id="slider2-11">
        <div className="container-fluid">
          <div className="mbr-section-head">
            <h1 className="text-center text-dark">
              <strong>合作小農</strong>
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10">
              <div
                className="carousel slide carousel-fade"
                id="sB56BtHjBK"
                data-ride="carousel"
                data-interval="3000"
              >
                <div
                  className="mbr-overlay"
                  style={{opacity:" 0" ,backgroundColor: "rgb(232, 234, 225)"}}
                ></div>
                <ol className="carousel-indicators">
                  <li
                    data-slide-to="0"
                    className="active"
                    data-target="#sB56BtHjBK"
                  ></li>
                  <li
                    data-slide-to="1"
                    className="active"
                    data-target="#sB56BtHjBK"
                  ></li>
                  <li data-slide-to="2" data-target="#sB56BtHjBK"></li>
                  <li data-slide-to="3" data-target="#sB56BtHjBK"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item slider-image item active">
                    <div className="item-wrapper">
                      <img
                        className=" w-50 m-6"
                        src="/About/mapn.png"
                        data-slide-to="0"
                      />
                      <img
                        className=" w-50"
                        src="/About/mapm.png"
                        data-slide-to="1"
                      />
                      <img
                        className=" w-50"
                        src="/About/maps.png"
                        data-slide-to="1"
                      />
                      <img
                        className=" w-50"
                        src="/About/mape.png"
                        data-slide-to="1"
                      />
                    </div>
                  </div>
                 
                  
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*聯絡我們*/}
      <section className="slider2 cid-sB0dDzuCKT" id="slider2-11">
        <div className="container-fluid">
          <div className="mbr-section-head">
            <h1 className="text-center text-dark">
              <strong>聯絡我們</strong>
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <div className="image-wrapper">
                <img className="w-100" src="/About/MEMBERBAN.png" alt="ROWFRUIT" />
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
              
                <div className="dragArea row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="mbr-text mbr-fonts-style mb-4 display-7 h3">
                    聯絡電話 :<br />
                    0931-000-000
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 form-group h4" >
                  <p className="mbr-text mbr-fonts-style mb-4 display-7">
                  聯絡地址 :<br />
                  台北市信義區吳興街177號
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 form-group h4" >
                  <p className="mbr-text mbr-fonts-style mb-4 display-7">
                  信箱 :<br />
                  rowfruit@test.com
                    </p>
                  </div>
               
                </div>
              
            </div>
            <div className="offset-lg-1"></div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default About;
