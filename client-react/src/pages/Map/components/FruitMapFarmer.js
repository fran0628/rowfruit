import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import FruitMapFarmerItem from './FruitMapFarmerItem'

function FruitMapFarmer(props) {
  const position = [24.93, 121.38];
  const farmNameList = {
    farmNameOne: '陳伯伯果園',
    farmNameTwo: '發財果園',
    farmNameThree: '小玉新鮮果園',
  }
  const descriptionList = {
    descriptionListOne: '最天然方式栽種每顆水果',
    descriptionListTwo: '吃得新鮮，吃得好。有機種植沒煩惱!',
    descriptionListThree: '歡迎來參觀我們的果園，新鮮能看得見!',
  }
  const featureList = {
    featureListOne: '口碑第一',
    featureListTwo: '有機無毒',
    featureListThree: '',
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="container-fluid col-md-7">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="map"
                           
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div class="col-md-5 px-1">
            <FruitMapFarmerItem
              farmNameList={farmNameList.farmNameOne}
              descriptionList={descriptionList.descriptionListOne}
              featureList={featureList.featureListOne}
            />
            <FruitMapFarmerItem
              farmNameList={farmNameList.farmNameTwo}
              descriptionList={descriptionList.descriptionListTwo}
              featureList={featureList.featureListTwo}
            />
            <FruitMapFarmerItem
              farmNameList={farmNameList.farmNameThree}
              descriptionList={descriptionList.descriptionListThree}
              featureList={featureList.featureListThree}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default FruitMapFarmer
