import React from 'react'
import ProductContent from './ProductContent'
import { v4 } from "uuid";


function ProductTable(props) {
  const {myCart,setMyCart,setCartUpdate}=props
    return (
        <>
        <table className="border border-2 w-100">
        <thead className="tableTitle">
          <td>商品圖片</td>
          <td>商品名稱</td>
          <td>商品內容</td>
          <td>商品價格</td>
          <td>商品數量</td>
          <td> </td>
        </thead>
        {myCart.map((item,index)=>{
          const {
                  productId,
                  productName,
                  count,
                  content,
                  price,
                  imageUrl,
                } = item;
                return (
                  <ProductContent
                    key={v4()}
                    productId={productId}
                    productName={productName}
                    count={count}
                    content={content}
                    price={price}
                    imageUrl={imageUrl}
                    myCart={myCart}
                    setMyCart={setMyCart}
                    setCartUpdate={setCartUpdate}
                   
                  />
                );
        })}

       
      </table>
        </>
    )
}
export default ProductTable