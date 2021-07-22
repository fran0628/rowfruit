import React from 'react'
import './Map.scss'
import FruitBall from './components/FruitBall'
import FruitMapFarmer from './components/FruitMapFarmer'

function FruitMapMain(props) {
  return (
    <>
      <div>
        <div className="container">
          <div className="container mx-3 my-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#/">首頁</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  水果地圖
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <FruitBall />
        <FruitMapFarmer />
      </div>
    </>
  )
}
export default FruitMapMain
