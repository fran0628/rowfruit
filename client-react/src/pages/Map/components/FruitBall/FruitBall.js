import React from "react";
import FruitBallItem from "./FruitBallItem";
function FruitBall(props) {
  return (
    <>
      <div className="container d-flex justify-content-between mt-3 mb-3 all_ball">
        {props.fruits.map((v, i) => {
          return (
            <FruitBallItem
              key={i}
              fruit_name={v.fruit_name}
              fruitClick={props.fruitClick}
            />
          );
        })}
      </div>
    </>
  );
}
export default FruitBall;
