import React, {useEffect } from "react";

function CartListContent(props) {
  const {
    id,
    fruitname,
    imageFront,
    images,
    price,
    wight,
    nutrients,
    setCartData,
    index,
    data,
    setCounts,
    count,
    setCount,
    cartItem,
    setCartItem,
  } = props;

  
  data.forEach(product => {
    let nutrients = product.nutrients.split(",");
    product.items.forEach(item => {
      item.nutrients = nutrients;
    });
  });
    const allProduct = []
   data.forEach((product)=>{
    product.items.forEach(item=>{
      allProduct.push(item)
    })
   })
  const thisProduct = {...cartItem}
  const productPrice = thisProduct.price
  const productWight = thisProduct.wight
  const productNutrients = thisProduct.nutrients
  //  console.log(productPrice)
  // console.log(cartItem)


  const newImageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +
    images;
  //刪除
  function deleteItem() {
    setCartData(function (cartData) {
      return cartData.filter((item) => item.id !== id);
    });
    setCounts(function (prev) {
      const newPr = [...prev]
      newPr.splice(index,1)
      return newPr
    })
  }
  

  function minus(){
    setCount(count-1)
    setCartItem(()=>{
      cartItem.price=productPrice*(count-1)
      cartItem.wight=productWight*(count-1)
      cartItem.nutrientsArray=productNutrients*(count-1)
    })
    
  }
  function plus(){
    setCount(count+1)
    setCartItem(()=>{
      cartItem.price=productPrice*(count+1)
      cartItem.wight=productWight*(count+1)
      cartItem.nutrientsArray=productNutrients*(count+1)
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
          <i onClick={minus} className="fas fa-minus ItemMinus"></i>
          <span className="itemQuantity">{count}</span>
          <i onClick={plus} className="fas fa-plus ItemPlus"></i>
        </div>
        <div className="itemPrice">
          <span>$</span>
          <span>{price}</span>
        </div>
        <div className="text-center">
          <div>分量</div>
          <div>{wight}</div>
        </div>
        <i
          onClick={deleteItem}
          className="pe-2 fas fa-trash-alt deleteItem"
        ></i>
      </div>
    </>
  );
}
export default CartListContent;
