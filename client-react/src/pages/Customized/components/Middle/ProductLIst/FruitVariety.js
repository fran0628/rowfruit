import React, { useState } from "react";
import { API_HOST } from "../../../../../config";
import Swal from "sweetalert2";
function FruitVariety(props) {
  // console.log("FruitVariety",props)
  const {
    id,
    fruitname,
    price,
    unit,
    wight,
    images,
    fram_name,
    avatar,
    imageFront,
    addCart,
    nutrients,
    setCounts,
    counts
  } = props;
  
  const newImageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +
    images;
  const farmerImageUrl = API_HOST + "/images/" + avatar;
  

  function addItem() {
    //物件放進右側客製化列表
    setCounts(function(prevCounts){
      const newCounts = [1,...prevCounts]
      return newCounts
    })
    addCart(function (prevData) {
      return [
        { id, fruitname, price, wight, images, imageFront, nutrients },
        ...prevData,
      ];
    });
  }
 

  return (
    <>
      <div className="row productItem">
        <div className="col-2 h-100 d-flex justify-content-center align-items-center productItemImage">
          <div className="smallImageBox ">
            <img className="productImage imageLarge" src={newImageUrl} alt="" />
          </div>
        </div>
        <div className="col-3 h-100 d-flex align-items-center justify-content-center">
          <p className="fs-4 ">{fruitname}</p>
        </div>
        <div className="col-2 h-100 d-flex align-items-center">
          <p className="price">
            <i className="fas fa-dollar-sign"></i>
            {price}
          </p>
          <p className="d-block">/{unit}</p>
        </div>
        <div className="col-1 h-100 d-flex align-items-center justify-content-end">
          <p className="btn addCart" onClick={addItem}>
            <i className="far fa-plus-square"></i>
          </p>
        </div>
        <div className="col-2 h-100 d-flex align-items-center">
          <div className="smallImageBox">
            <img
              className="productImage"
              src="https://images.pexels.com/photos/8828132/pexels-photo-8828132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              // src={farmerImageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="col-2 h-100 d-flex align-items-center px-0 ">
          <div>
            <p className="my-0">{fram_name}</p>
            <p className="my-0">
              4.5<i className="fas fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitVariety;
