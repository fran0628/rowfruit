import React, { useEffect, useState } from "react";
// import axios from "axios";

function FruitMapFarmerItem(props) {
  const {avatar, farm_name, content} = props;
  // {data.map((value, i) => (
  //   <FruitMapFarmerItem
  //     value={value}
  //     key={i}
  //     avatar={value.avatar}
  //     fram_name={value.fram_name}
  //     content={value.content}
  //   />
  // ))}
  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img className="avatar" src="{avatar}" alt="" />
          {/* <h6 className="mt-3 m-3"></h6> */}
        </div>
        <div className="vertical align-items-center">
          <h5 className="mt-4">
            果園名稱：{farm_name}
            <br />
            隨便果園
          </h5>
          <h6>
            {content}
            來源：網路流傳高雄小港機場上的時鐘，顯示著差六分就五點鐘，高大的男孩，從計程車上跳下，就一路從門口走來，抬起黝黑的臉，瞇著眼看著時間。他的心，跳動著自己都很吃驚，因為無法控制。再過六分鐘，他就要見到一個特別的女人。
          </h6>
        </div>

        <button className="knowfarmbtn">認識小農</button>
      </div>
    </>
  );
}
export default FruitMapFarmerItem;
