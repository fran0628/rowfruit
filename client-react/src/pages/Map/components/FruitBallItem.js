import React from "react";
import FruitMapIcon from "../indexCustomAniIcon/avocado.png";

function FruitBallItem(props) {
  return (
    <>
      <div className="fruit_ball shake-slow" id="clickMe">
        <img src={FruitMapIcon} alt="avocado" />
        {/* <img src={require("avocado")} alt="avocado"/> */}
      </div>
    </>
  );
}
export default FruitBallItem;
