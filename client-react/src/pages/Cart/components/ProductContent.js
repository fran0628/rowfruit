import React from "react";

function ProductContent(props) {
  const {imageUrl,productName,price,content,count,myCart,setMyCart,setCartUpdate}=props

  function deleteItem(){
    localStorage.setItem('cart',JSON.stringify(myCart.filter((item)=>item.content !== content)))
    setMyCart(myCart.filter((item)=>item.content !== content))
    setCartUpdate(true)
   }
  return (
    <>
    <tbody>
      <td style={{ width: "10%",height:"100px" }}>
        <img
          className="imageStyle"
          src={imageUrl}
          alt=""
        />
      </td>
      <td style={{ width: "10%" }}>{productName}</td>
      <td style={{ width: "60%" }}>
        {content}
      </td>
      <td>${price}</td>
      <td>{count}</td>
      <td>
        <i onClick={deleteItem} className="pe-2 fas fa-trash-alt "></i>
      </td>
      </tbody>
    </>
  );
}
export default ProductContent;
