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
    rating,
    imageArray,
    content,
    imageFront,
    cartData,
    addCart,
    nutrients,
    setCounts,
    modalRef,
    setModalData
  } = props;
  const nutrientsArray = nutrients.split(",");
  const newImageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +
    images;
  const farmerImageUrl = API_HOST + "/images/" + avatar;


  function addCartDataAndCounts(){
    //把控制數量的值丟進去初始為1
    setCounts(function (prevCounts) {
      const newCounts = [1, ...prevCounts];
      return newCounts;
    });
    //資料加到cartData裡面
    addCart(function (prevData) {
      const newCartData = [
        { id, fruitname, price, wight, images, imageFront, nutrientsArray },
        ...prevData,
      ]
      return newCartData
    })
  }
  function sweetAlert(){
    Swal.fire({
      title: `${fruitname}已經有了!`,
      text: "可以點擊列表增加數量",
      imageUrl: newImageUrl,
      imageHeight: 200,
      imageAlt: "Custom image",
      animation: false,
      confirmButtonText: "關閉",
    });
  }
  function addItem() {
    if(cartData.length===0){
      addCartDataAndCounts()
    }else{
      for(let i = 0;i<cartData.length;i++){
        if(cartData[i].id === id){
          sweetAlert()
          return
        }
      }
      addCartDataAndCounts()
    }
  }
  
  const newImageArray = imageArray&&imageArray.split(',').map((item)=>{
    const newImage=
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +item
    return newImage
  })
  function setAndOpenModal(){
    modalRef.current.openModal()
    setModalData((modalData)=>{
      const newModalData={...modalData}
      newModalData.fruitName=fruitname
      newModalData.images=newImageArray
      newModalData.farmerName=fram_name
      newModalData.farmerImage=farmerImageUrl
      newModalData.farmerContent=content
      return newModalData
    })
  }

  return (
    <>
      <div className="row productItem">
        <div className="col-2 h-100 d-flex justify-content-center align-items-center productItemImage">
          <div onClick={setAndOpenModal} className="smallImageBox ">
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
              // src="https://images.pexels.com/photos/8828132/pexels-photo-8828132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              src={farmerImageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="col-2 h-100 d-flex align-items-center px-0 ">
          <div>
            <p className="my-0">{fram_name}</p>
            <p className="my-0">
              {rating}<i className="fas fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitVariety;
