import React from 'react'
import FruitMapIcon from '../FruitMapIcon/apple.png'

function FruitBallItem(props) {
  // const { FruitMapIcon } = props
  return (
    <>
      <div className="fruit_ball shake-slow" id="clickMe">
        <img src={FruitMapIcon} alt="..." />
      </div>
    </>
  )
}
export default FruitBallItem
