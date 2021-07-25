import React,{useState} from 'react'
import { API_HOST } from "../../../../../config";
function FruitVariety(props) {
  // console.log(props)
  const{id,fruitname,price,unit,wight,images,fram_name,avatar,imageFront,addCart}=props

  const newImageUrl = "http://localhost:3000/images/CustomizedPhotos/"+imageFront+"/"+images
  const farmerImageUrl =API_HOST+"/images/"+avatar

  const [quantity,setQuantity]=useState(1)

  function addItem(){
    addCart(function(prevData){
      // console.log("prevData",prevData)
      if(prevData.length === 0){
        return [{
          id,fruitname,price,wight,images,imageFront,quantity
        },...prevData]
      }
      return [{
        id,fruitname,price,wight,images,imageFront,quantity
      },...prevData]
    })
  }
 
    return (
        <>
            <div className="row productItem">
                <div className="col-2 h-100 d-flex justify-content-center align-items-center productItemImage">
                  <div className="smallImageBox ">
                    <img
                      className="productImage imageLarge"
                      src={newImageUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-3 h-100 d-flex align-items-center justify-content-center">
                  <p className="fs-4 ">{fruitname}</p>
                </div>
                <div className="col-2 h-100 d-flex align-items-center">
                  <p className="price">
                    <i className="fas fa-dollar-sign"></i>{price}
                  </p>
                  <p className="d-block">/{unit}</p>
                </div>
                <div className="col-1 h-100 d-flex align-items-center justify-content-end">
                  <p className="btn addCart" onClick={addItem} >
                    <i className="far fa-plus-square"></i>
                  </p>
                </div>
                <div className="col-2 h-100 d-flex align-items-center">
                  <div className="smallImageBox">
                    <img
                      className="productImage"
                      src={farmerImageUrl}
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
    )
}
export default FruitVariety