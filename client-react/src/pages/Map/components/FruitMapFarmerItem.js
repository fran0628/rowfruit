import React from 'react'

function FruitMapFarmerItem(props) {
  const { farmName, description, feature } = props
  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img
            className="avatar mt-3 m-3"
            src="faimg/istockphoto-1201261642-612x612.jpg"
            alt="..."
          />
          <h6 className="mt-3 m-3">
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
            <img className="icon" src="/img/star.svg" alt="" />
          </h6>
        </div>
        <div className="vertical align-items-center">
          <h4 className="mt-4">果園名稱{farmName}</h4>
          <h6>最天然方式栽種每顆水果{description}</h6>
          <div className="mt-5 px-3">
            <img className="icon" src="/img/ecology.png" alt="" />
            <p>有機無毒{feature}</p>
          </div>
        </div>
        <button id="knowMore" className="btn align-self-end p-1">
          認識小農
        </button>
      </div>
    </>
  )
}

export default FruitMapFarmerItem
