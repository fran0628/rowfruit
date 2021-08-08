import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";


function FruitMapFarmer(props) {
  const { farmerMap, setFarmerMap } = props;
  const url = "http://localhost:5000/images/";

  // console.log("地圖的原件傳下來的資料", farmerMap);
  
  // const {farmer}=props
  // myIcon
  const myIcon = L.icon({
    iconUrl: 'http://localhost:5000/images/apple.png',
    iconSize: [30, 30],
    iconAnchor: new L.Point(0, 0),
    popupAnchor: [20, 20],
    shadowUrl: null,
    shadowSize: [15, 15],
    shadowAnchor: [10, 10],
  });
  // 中大中心點
  const defaulPosition = [24.41, 120.78];
  // console.log(farmerMap[0].position);
  // console.log(farmerMap);

  useEffect(() => {}, []);
  return (
    <>
      <MapContainer
        center={defaulPosition}
        zoom={8}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {farmerMap &&
          farmerMap.map((position, i) => {
            return (
              <Marker
                icon = {myIcon}
                position={
                  position.position ? position.position : defaulPosition
                }
              >
                <Popup>
                  <img
                    className="avatar object-fit"
                    src={url + position.avatar}
                    alt="{position.avatar}"
                  />

                  <h5> {position.fram_name}</h5>
                  <h6>{position.content}</h6>
                  <p>{position.address}</p>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
}
export default FruitMapFarmer;

// {data.map((item) => (
//   <Marker position={[item.latitude, item.longitude]}>
//     <Popup>
//       <h4> {item.fram_name}</h4>
//       {item.address} <br /> {item.content}
//     </Popup>
//   </Marker>
// ))}
