import React from 'react';
import './indexCustomAni.scss';
// import indexCustomAniIcon from '../public/indexCustomAniIcon/hand.png'

function IndexCustomAni() {
  return (
    <>
      <div className="container">
        <div className="box orange">
          <img className="hand" src="{indexCustomAniIcon}}" alt="" />
          <img className="thebox" src="./img/box.png" alt="" />
        </div>

        <div className="container-fluid box green"></div>
        <div className="container-fluid all_ball box">
          {/* <div className="guava fruit_ball shake-slow">
            <img id="fruit" src="./fruimg/guava.png" alt="..." />
          </div>
          <div className="apple fruit_ball shake-slow">
            <img src="./fruimg/apple.png" alt="..." />
          </div>
          <div className="banana fruit_ball shake-slow">
            <img src="./fruimg/banana.png" alt="..." />
          </div>
          <div className="pineapple fruit_ball shake-slow">
            <img src="./fruimg/pineapple.png" alt="..." />
          </div>
          <div className="papaya fruit_ball">
            <img src="./fruimg/papaya.png" alt="..." />
          </div> */}
        </div>

        <div className="container-fluid section">
          {/* <h1 className="title1">客製化水果</h1> */}
          <h1 className="title2">親手選擇當季最新鮮的水果</h1>
          <h4 className="title3">吃的開心,吃得健康,滿足您全家人的喜好</h4>
          <button className="gotocustombtn">前往購買!</button>
          <h3 className="title4">打造專屬於你的水果盒 讓您與眾不同</h3>
        </div>
      </div>
    </>
  );
}
export default IndexCustomAni;
