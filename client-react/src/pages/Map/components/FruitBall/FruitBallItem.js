import React from "react";
// import FruitMapIcon from "../indexCustomAniIcon/avocado.png";

// http://localhost:3000/indexCustomAniIcon/apple.png
function FruitBallItem() {
 
  // const fruitIcon = 'http://localhost:3000/indexCustomAniIcon/'+Img
  
  return (
    <>
      <div className="fruit_ball shake-slow" id="clickMe">
        <img src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        {/* <img src={require("avocado")} alt="avocado"/> */}
      </div>
    </>
  );
}
export default FruitBallItem;
