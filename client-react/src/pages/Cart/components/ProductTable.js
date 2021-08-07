import React from 'react'
import StepOneContent from './ProductContent'

function ProductTable() {
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
        <StepOneContent />
        <StepOneContent />
        <StepOneContent />
      </table>
        </>
    )
}
export default ProductTable