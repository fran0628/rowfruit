import React from "react";

function ProductContent(props) {
  const {imageUrl,productName,price,content,count}=props
  return (
    <>
    <tbody>
      <td style={{ width: "10%" }}>
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
        <i className="pe-2 fas fa-trash-alt "></i>
      </td>
      </tbody>
    </>
  );
}
export default ProductContent;
