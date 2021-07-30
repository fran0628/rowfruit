import React from "react";
import "./indexCustomAni.scss";

function IndexCustomAni() {
  // 客制化水果盒按鈕連結
  const urlid = String();
  const urlcustombtn = "/customized/" + urlid;
  return (
    <>
      <div className="container">
        <div className="box orange">
          {/* <img className="hand" src="{indexCustomAniIcon}" alt="" />
          <img className="thebox" src="{indexCustomAniIcon}" alt="" /> */}
        </div>
        <div className="container-fluid box green"></div>
        <div className="container-fluid all_ball box">
          {/* <div className="guava fruit_ball shake-slow">
            <img id="fruit" src="./fruimg/guava.png" alt="..." />
          </div>*/}
        </div>
        <div className="container-fluid section">
          <h1 className="title1">客製化水果</h1>
          <div class="at-item1">a</div>
          <div class="at-item2">b</div>
          <div class="at-item3">c</div>
          <h1 className="title2">親手選擇當季最新鮮的水果</h1>
          <h4 className="title3">吃的開心,吃得健康,滿足您全家人的喜好</h4>
          <a href={urlcustombtn}>
          <button className="gotocustombtn">前往購買!</button>
          </a>
          {/* <h3 className="title4">打造專屬於你的水果盒 讓您與眾不同</h3> */}
        </div>
      </div>
    </>
  );
}
export default IndexCustomAni;
