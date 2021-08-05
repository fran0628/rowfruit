import React from "react";

function Item(props) {
  const { productId, productName, count, content, price, imageUrl,myCart,setMyCart,setCartUpdate } = props;


  function deleteItem(){
   localStorage.setItem('cart',JSON.stringify(myCart.filter((item)=>item.content !== content)))
   setMyCart(myCart.filter((item)=>item.content !== content))
   setCartUpdate(true)
  }

  return (
    <>
      <tr>
        <th ><img style={{width:"100px"}} src={imageUrl} alt="" /></th>
        <td>{productName}</td>
        <td>{content}</td>
        <td>${price}</td>
        <td className="text-center">
         {count}
        </td>
        <td>{count*price}</td>
        <td><i
          className="pe-2 fas fa-trash-alt "
          onClick={deleteItem}
        ></i></td>
      </tr>
    </>
  );
}
export default Item;
