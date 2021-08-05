import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function FruitMapFarmer(props) {
  const { farmerMap, setFarmerMap } = props;
  const url = "http://localhost:5000/images/";

  // console.log("地圖的原件傳下來的資料", farmerMap);
  // const {farmer}=props
  // 中大中心點
  const defaulPosition = [24.96, 121.192];
  // console.log(farmerMap[0].position);
	console.log(farmerMap);

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
				{farmerMap && farmerMap.map((position, i) => {
					return (
						<Marker
							position={position.position ? position.position : defaulPosition}
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
