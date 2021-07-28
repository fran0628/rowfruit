import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FruitMapFarmerItem from "./FruitMapFarmerItem";

function FruitMapFarmer(props) {
  const {data}=props
  console.log(data)
  const position = [24.96,121.192];
  // const [FruitMapFarmerItem, setFruitMapFarmerItem] = useState();
  const farmNameList = {
    farmNameOne: "陳伯伯果園",
    farmNameTwo: "發財果園",
    farmNameThree: "小玉新鮮果園",
  };
  const descriptionList = {
    descriptionListOne: "最天然方式栽種每顆水果",
    descriptionListTwo: "吃得新鮮，吃得好。有機種植沒煩惱!",
    descriptionListThree: "歡迎來參觀我們的果園，新鮮能看得見!",
  };
  // const featureList = {
  //   featureListOne: "口碑第一",
  //   featureListTwo: "有機無毒",
  //   featureListThree: "口碑第一",
  // };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="container-fluid col-md-7">
            <MapContainer
              center={position}
              zoom={8}
              scrollWheelZoom={true}
              className="map"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
             {data.map(item=>(
              <Marker position={[item.latitude,item.longitude]}>
                <Popup>
                  <h4> {item.fram_name}</h4>
                 {item.address} <br /> {item.content}口碑第一
                </Popup>
              </Marker>
            
             ))}
            </MapContainer>  
          </div>
          <div class="col-md-5 px-1">
            <FruitMapFarmerItem
            farmNameList={farmNameList.farmNameOne}
            descriptionList={descriptionList.descriptionListOne}
           
            />
            <FruitMapFarmerItem
              // farmNameList={farmNameList.farmNameTwo}
              // descriptionList={descriptionList.descriptionListTwo}
              // featureList={featureList.featureListTwo}
            />
            <FruitMapFarmerItem
              // farmNameList={farmNameList.farmNameThree}
              // descriptionList={descriptionList.descriptionListThree}
              // featureList={featureList.featureListThree}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitMapFarmer;
