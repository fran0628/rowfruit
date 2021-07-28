import React from 'react';

function productItem() {
  return (
    <>
      <div classNameName="col-8 mx-auto mt-3">
        <table className="table table-success table-striped table-hover container">
          <thead className="container">
            <tr>
              <th>商品圖片</th>
              <th>商品名稱</th>
              <th>商品價格</th>
              <th>商品數量</th>
              <th>商品小計</th>
              <th>商品總價</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2</th>
                <td>美白水果盒</td>
                <td>$500</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>美白水果盒</td>
                <td>$500</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>健身水果盒</td>
                <td>$500</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
              </tr>
            </tbody>          
        </table>
      </div>
    </>
  );
}
export default productItem
