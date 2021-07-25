import React from "react";

const CartListContent = ({
  id,
  fruitname,
  imageFront,
  images,
  price,
  wight,
  quantity,
  deleteCart
}) => {
  const newImageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +
    images;


  function deleteItem(){
    deleteCart(function(prev){
      return prev.filter(item => item.id !==id)
    })
  }

  return (
    <>
      <div className="cartLIstContainer"></div>
      <div className="cartList d-flex align-items-center justify-content-between border border-3">
        <div class="cartListImage">
          <img className="productImage" src={newImageUrl} alt="" />
        </div>
        <div className="itemName">
          <p>{fruitname}</p>
        </div>
        <div>
          <i className="fas fa-minus ItemMinus"></i>
          <span className="itemQuantity">{quantity}</span>
          <i className="fas fa-plus ItemPlus"></i>
        </div>
        <div className="itemPrice">
          <span>$</span>
          <span>{price}</span>
        </div>
        <div className="text-center">
          <div>分量</div>
          <div>{wight}</div>
        </div>
        <i onClick={deleteItem} className="pe-2 fas fa-trash-alt deleteItem"></i>
      </div>
    </>
  );
};
export default CartListContent;
