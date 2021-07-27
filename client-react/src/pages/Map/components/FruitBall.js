import React, { useEffect } from "react";
import FruitBallItem from './FruitBallItem'
// import FruitMapIcon from "../indexCustomAniIcon/avocado.png";
function FruitBall(props) {
  // const picturesList = {
  //   fruitBallOne: '芭樂',
  //   fruitBallTwo: '蘋果',
  //   fruitBallThree: '香蕉',
  //   fruitBallFour: '鳳梨',
  //   fruitBallFive: '木瓜',
  //   fruitBallSix: '酪梨',
  //   fruitBallSeven: '芒果',
  //   fruitBallEight: '西瓜',
  //   fruitBallNine: '奇異果',
  //   fruitBallTen: '橘子',
  // }
  return (
    <>
      <div className="container d-flex justify-content-between mt-3 mb-3 all_ball">
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
        <FruitBallItem  />
      </div>
    </>
  )
}
export default FruitBall
