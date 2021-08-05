import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
// import axios from "axios";

function FruitMapFarmerItem(props) {
  const { value } = props;
  const url = "http://localhost:5000/images/";
  // {data.map((value, i) => (
  //   <FruitMapFarmerItem
  //     value={value}
  //     key={i}
  //     avatar={value.avatar}
  //     fram_name={value.fram_name}
  //     content={value.content}
  //   />
  // ))}
  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img className="avatar object-fit" src={url + value.avatar} alt="" />
          <ReactStars value={value.rating} size={16} edit={false} />
        </div>
        <div className="vertical align-items-center">
          <h5 className="mt-4">果園名稱：{value.fram_name}</h5>
          {/* <ReactStars value={value.rating} size={20} edit={false} /> */}
          <h6>{value.content}</h6>
        </div>
      </div>
    </>
  );
}
export default FruitMapFarmerItem;
