import React from 'react'
import './Map.scss'
import FruitBall from './components/FruitBall'
import FruitMapFarmer from './components/FruitMapFarmer'

function FruitMapMain(props) {
  return (
    <>
      <div>
        <FruitBall />
        <FruitMapFarmer />
      </div>
    </>
  )
}
export default FruitMapMain
