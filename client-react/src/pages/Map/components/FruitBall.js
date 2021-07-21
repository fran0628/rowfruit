import React from 'react'
import FruitBallItem from './FruitBallItem'

function FruitBall(props) {
  const picturesList = {
    fruitBallOne: '芭樂',
    fruitBallTwo: '蘋果',
    fruitBallThree: '香蕉',
    fruitBallFour: '鳳梨',
    fruitBallFive: '木瓜',
    fruitBallSix: '酪梨',
    fruitBallSeven: '芒果',
    fruitBallEight: '西瓜',
    fruitBallNine: '奇異果',
    fruitBallTen: '橘子',
  }
  return (
    <>
      <div className="container d-flex justify-content-between mt-3 mb-3 all_ball">
        <FruitBallItem picture={picturesList.fruitBallOne} />
        <FruitBallItem picture={picturesList.fruitBallTwo} />
        <FruitBallItem picture={picturesList.fruitBallThree} />
        <FruitBallItem picture={picturesList.fruitBallFour} />
        <FruitBallItem picture={picturesList.fruitBallFive} />
        <FruitBallItem picture={picturesList.fruitBallSix} />
        <FruitBallItem picture={picturesList.fruitBallSeven} />
        <FruitBallItem picture={picturesList.fruitBallEight} />
        <FruitBallItem picture={picturesList.fruitBallNine} />
        <FruitBallItem picture={picturesList.fruitBallTen} />
      </div>
    </>
  )
}
export default FruitBall
