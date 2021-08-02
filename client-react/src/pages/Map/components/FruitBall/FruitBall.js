import React from "react";
import FruitBallItem from "./FruitBallItem";
function FruitBall(props) {
  return (
    <>
      <div className="container d-flex justify-content-between mt-3 mb-3 all_ball">
        <FruitBallItem />
        <FruitBallItem />
        <FruitBallItem />
        <FruitBallItem />
      </div>
    </>
  );
}
export default FruitBall;
