import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function FruitMapFarmer() {
  // const {farmer}=props
  const defaulPosition = [24.96, 121.192];
  // console.log(farmer)

  return (
    <>
      
        <MapContainer
          center={defaulPosition}
          zoom={8}
          // scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position[0] ? [position[0].latitude, position[0].longitude] : defaulPosition}> */}
          {/* <Popup>
                    <h4> {item.fram_name}</h4>
                    {item.address} <br /> {item.content}
                  </Popup> */}
          {/* </Marker> */}
          {/* {position.map((p) => (
                <Marker position={[p.latitude, p.longitude]}>
                  <Popup>
                    <h4> {p.fram_name}</h4>
                    {p.address} <br /> {p.content}
                  </Popup>
                </Marker>
              ))} */}
        </MapContainer>
      
    </>
  );
}
export default FruitMapFarmer;
