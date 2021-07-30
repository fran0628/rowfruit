import React from "react";
// import FruitMapIcon from "../indexCustomAniIcon/avocado.png";

// http://localhost:3000/indexCustomAniIcon/apple.png
function FruitBallItem(props) {
  const {Img} = props
  const fruitIcon = 'http://localhost:3000/indexCustomAniIcon/'+Img
  console.log(fruitIcon)
  
  return (
    <>
      <div className="fruit_ball shake-slow" id="clickMe">
        <img src={fruitIcon} alt="avocado" />
        {/* <img src={require("avocado")} alt="avocado"/> */}
      </div>
    </>
  );
}
export default FruitBallItem;
