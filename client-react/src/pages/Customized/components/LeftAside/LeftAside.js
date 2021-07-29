import React, { useState } from "react";
import Progress from "./Progress";
import { Link } from 'react-scroll'
function LeftAside(props) {
  const { cartData } = props;

  let carbon_water = 0;
  let dietary_fiber = 0;
  let vitamin_A = 0;
  let vitamin_C = 0;
  let Potassium = 0;
  for (let i = 0; i < cartData.length; i++) {
    carbon_water += +cartData[i].nutrientsArray[0];
    dietary_fiber += +cartData[i].nutrientsArray[1];
    vitamin_A += +cartData[i].nutrientsArray[2];
    vitamin_C += +cartData[i].nutrientsArray[3];
    Potassium += +cartData[i].nutrientsArray[4];
  }
  
  const nutrients = [
    {
      className: "carbon_water",
      chineseName: "碳水化合物",
      width: carbon_water,
    },
    {
      className: "dietary_fiber",
      chineseName: "膳食纖維",
      width: dietary_fiber,
    },
    { className: "vitamin_A", chineseName: "維他命A", width: vitamin_A },
    { className: "vitamin_C", chineseName: "維他命C", width: vitamin_C },
    { className: "Potassium", chineseName: "鉀", width: Potassium },
  ];

  return (
    <>
      <aside className="col-md-2 d-none d-lg-block ">
        <div className="tagGroup ms-4">
        <span className="btn d-block text-center tag-all">全部商品</span>
        <span className="btn d-block text-center tag-whitening">美白</span>
        <span className="btn d-block text-center tag-slimming">瘦身</span>
        <span className="btn d-block text-center tag-silverHair">銀髮族</span>
        <span className="btn d-block text-center tag-vision">顧眼睛</span>
        </div>
        <div className="progressgroup">
          <p className="h4 text-center">每周營養所需</p>
          {nutrients.map((item, index) => {
            const { className, chineseName,width } = item;
            return (
              <Progress
                key={index}
                className={className}
                chineseName={chineseName}
                width={width}
              />
            );
          })}
        </div>
      </aside>
    </>
  );
}
export default LeftAside;
