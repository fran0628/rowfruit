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
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-2">
                <strong>ROWFRUIT</strong>
              </h1>

              <p className="mbr-text mbr-fonts-style display-7">
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
      <section className="slider2 cid-sB0dDzuCKT" id="slider2-11">
        <div className="container">
          <div className="mbr-section-head">
            <h1 className="mbr-section-title mb-4 align-center display-2">
              <strong>品牌故事</strong>
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper">
                <img src="/About/farmer.png" alt="ROWFRUIT" />
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-6">
                  <strong>您的水果專家已上線</strong>
                  <div>
                    <strong>嚴選水果幫您搭配好,配送一周所需免煩惱</strong>
                  </div>
                </h3>
                <p className="mbr-text mbr-fonts-style display-7">
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
      </section>
      {/*合作小農*/}
      <section className="slider2 cid-sB0dDzuCKT" id="slider2-11">
        <div className="container-fluid">
          <div className="mbr-section-head">
            <h1 className="mbr-section-title mb-4 align-center display-2">
              <strong>合作小農</strong>
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-12">
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
                        className="d-block w-100"
                        src="/About/mapn.png"
                        data-slide-to="0"
                      />
                    </div>
                  </div>
                  <div className="carousel-item slider-image item">
                    <div className="item-wrapper">
                      <img
                        className="d-block w-100"
                        src="/About/mapm.png"
                        data-slide-to="1"
                      />
                    </div>
                  </div>
                  <div className="carousel-item slider-image item">
                    <div className="item-wrapper">
                      <img className="d-block w-100" src="./maps.png" alt="" />
                    </div>
                  </div>
                  <div className="carousel-item slider-image item">
                    <div className="item-wrapper">
                      <img className="d-block w-100" src="/About/mape.png" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control carousel-control-prev"
                  role="button"
                  data-slide="prev"
                  href="#sB56BtHjBK"
                >
                  <span
                    className="mobi-mbri mobi-mbri-arrow-prev"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control carousel-control-next"
                  role="button"
                  data-slide="next"
                  href="#sB56BtHjBK"
                >
                  <span
                    className="mobi-mbri mobi-mbri-arrow-next"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*聯絡我們*/}
      <section className="form3 cid-sB0efHdfwR" id="form3-12">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="mbr-section-title mb-4 align-center display-2">
              <strong>聯絡我們</strong>
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="image-wrapper">
                <img className="w-100" src="/About/MEMBERBAN.png" alt="ROWFRUIT" />
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
              <form
                action=""
                method="POST"
                className="mbr-form form-with-styler"
                data-form-title="Form Name"
              >
                <input
                  type="hidden"
                  name="email"
                  data-form-email="true"
                  value="acJ5geYuGjVJ+NOc5QuQom6uFHsAPiQHjR3ikqyj+9ZIrum3j7R91j8Hm+oxcx3NmyZhoXNM5bWvhvFWquME/QdQE7adfHlRKk7lyJoQUUzDX8KS/Td4OiYs8k2ajUA7"
                />
                <div className="">
                  <div
                    hidden="hidden"
                    data-form-alert=""
                    className="alert alert-success col-12"
                  >
                    感謝您填寫表格
                  </div>
                  <div
                    hidden="hidden"
                    data-form-alert-danger=""
                    className="alert alert-danger col-12"
                  >
                    填寫不完整請仔填寫一遍
                  </div>
                </div>
                <div className="dragArea row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="mbr-text mbr-fonts-style mb-4 display-7">
                      請填寫表格資料，我們會盡快回復您
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 form-group" data-for="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="姓名"
                      data-form-field="name"
                      className="form-control"
                      value=""
                      id="name-form5-15"
                    />
                  </div>
                  <div className="col-12 col-sm-12 form-group" data-for="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      data-form-field="name"
                      className="form-control"
                      value=""
                      id="name-form5-15"
                    />
                  </div>

                  <div className="col-12 form-group" data-for="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="電子郵箱"
                      data-form-field="url"
                      className="form-control"
                      value=""
                      id="email-form5-15"
                    />
                  </div>
                  <div className="col-12 form-group" data-for="textarea">
                    <textarea
                      name="textarea"
                      placeholder="留言"
                      data-form-field="textarea"
                      className="form-control"
                      id="textarea-form5-15"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                    <button type="submit" className="btn  display-4 COLOR">
                      提交
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="offset-lg-1"></div>
          </div>
        </div>
      </section>
      <section className="form3 cid-sB0egkXkd5" id="form3-13">

    

    
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
                <div className="image-wrapper">
                    <img className="w-100" src="/About/FARMERBAN.png" alt="ROWFRUIT"/>
                </div>
            </div>
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                <form action="" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="acJ5geYuGjVJ+NOc5QuQom6uFHsAPiQHjR3ikqyj+9ZIrum3j7R91j8Hm+oxcx3NmyZhoXNM5bWvhvFWquME/QdQE7adfHlRKk7lyJoQUUzDX8KS/Td4OiYs8k2ajUA7"/>
                    <div className="">
                        <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">感謝您填寫表格</div>
                        <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">填寫不完整請仔填寫一遍</div>
                    </div>
                    <div className="dragArea row">
                        
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">請填寫表格資料，我們會盡快回復您</p>
                        </div>
                        <div className="col-12 col-sm-12 form-group" data-for="name">
                            <input type="text" name="name" placeholder="姓名" data-form-field="name" className="form-control" value="" id="name-form5-15"/>
                        </div>
                        <div className="col-12 col-sm-12 form-group" data-for="name">
                            <input type="text" name="name" placeholder="Name" data-form-field="name" className="form-control" value="" id="name-form5-15"/>
                        </div>
                        
                        <div className="col-12 form-group" data-for="email">
                            <input type="email" name="email" placeholder="電子郵箱"  data-form-field="url" className="form-control" value="" id="email-form5-15"/>
                        </div>
                        <div className="col-12 form-group" data-for="textarea">
                            <textarea name="textarea" placeholder="留言" data-form-field="textarea" className="form-control" id="textarea-form5-15"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                            <button type="submit" className="btn display-4 COLOR">提交</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="offset-lg-1"></div>
        </div>
    </div>
</section>
    </>
  );
}

export default About;
