import React from "react";

function FruitIconItem(props) {
  const {Img} = props
  const fruitIcon = 'http://localhost:3000/indexCustomAniIcon/'+Img
  console.log(fruitIcon)
  
  return (
    <>
      <div className="fruit_ball" id="clickMe">
        <img src={fruitIcon} alt="avocado" />
      </div>
    </>
  );
}
export default FruitIconItem;