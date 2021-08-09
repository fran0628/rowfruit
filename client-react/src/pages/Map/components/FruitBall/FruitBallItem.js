import React from "react";

function FruitBallItem(props) {
 
  const fruitIcon =
    "http://localhost:3000/indexCustomAniIcon/" + props.fruit_name + ".png";

    
  return (
    <>
      <div className="fruit_ball ripple shake-slow" id="clickMe">
        <img
          onClick={() => props.fruitClick(props.fruit_name)}
          src={fruitIcon}
          alt="{props.fruit_name}"
        />
      </div>
    </>
  );
}
export default FruitBallItem;
