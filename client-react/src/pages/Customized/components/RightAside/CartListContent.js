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
   const thisProduct= allProduct.find((item)=>{
    return item.id===id
  })
  const productPrice=thisProduct.price
  const productWight=thisProduct.wight
  const productNutrients=thisProduct.nutrients
  

  const newImageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    imageFront +
    "/" +
    images;
  //刪除
  function deleteItem() {
    setCartData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
    setCounts(function (prev) {
      const newPr = [...prev]
      newPr.splice(index,1)
      return newPr
    })
  }


  function minus(){
    setCount(count-1)
    setCartData(function (prev) {
      const modifyData = [...prev]
      modifyData[index].price=productPrice*(count-1 ===0? 1:count-1)
      modifyData[index].wight=productWight*(count-1 ===0? 1:count-1)
      modifyData[index].nutrientsArray=productNutrients.map(item=>item*(count-1 ===0? 1:count-1))
      return modifyData
     });
  
  }
  function plus(){
    setCount(count+1)
    setCartData(function (prev) {
     const modifyData = [...prev]
     modifyData[index].price=productPrice*(count+1)
     modifyData[index].wight=productWight*(count+1)
     modifyData[index].nutrientsArray=productNutrients.map(item=>item*(count+1))
     return modifyData
    });
    
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
