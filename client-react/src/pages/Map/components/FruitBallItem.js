import React from 'react'

function FruitBallItem(props) {
  const { picture } = props
  return (
    <>
      <div className="fruit_ball shake-slow" id="clickMe">
        <img src={picture} alt="..." />
      </div>
    </>
  )
}
export default FruitBallItem
