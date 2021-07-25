import React from 'react'
import FruitMapIcon from '../FruitMapIcon/avocado.png'

function FruitMapFarmerItem(props) {
  const { farmName, description, feature } = props
  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img
            className="avatar mt-3 m-3"
            src={FruitMapIcon}
            alt="..."
          />
          <h6 className="mt-3 m-3">
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
          </h6>
        </div>
        <div className="vertical align-items-center">
          <h4 className="mt-4">陳伯伯果園{farmName}</h4>
          <h6>最天然方式栽種每顆水果{description}</h6>
          <div className="mt-5 px-3">
            <img className="icon" src="/img/ecology.png" alt="" />
            <h6>口碑第一{feature}</h6>
          </div>
        </div>
        <button className="knowfarmbtn align-self-end p-1">
          認識小農
        </button>
      </div>
    </>
  )
}

export default FruitMapFarmerItem
