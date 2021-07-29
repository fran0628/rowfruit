import React from "react";

function Item(props) {
  const { productId, productName, count, amount, price, imageUrl } = props;
  return (
    <>
      <tr>
        <th><img src={imageUrl} alt="" /></th>
        <td>{productName}</td>
        <td>{amount}</td>
        <td>${price}</td>
        <td>
          <input className="text-end" type="number" min="1" value={count}></input>
        </td>
        <td>{count*price}</td>
      </tr>
    </>
  );
}
export default Item;
