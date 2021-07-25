import React, { useState } from "react";
import Tag from "./Tag";
import Progress from "./Progress";

function LeftAside() {
  const tag=([
    { className: "tag-all", tagName: "全部商品" },
    { className: "tag-whitening", tagName: "美白" },
    { className: "tag-slimming", tagName: "瘦身" },
    { className: "tag-silverHair", tagName: "銀髮族" },
    { className: "tag-vision", tagName: "銀髮族" },
  ]);
  const nutrients =([
    {className:"carbon_water",chineseName:"碳水化合物"},
    {className:"dietary_fiber",chineseName:"膳食纖維"},
    {className:"vitamin_A",chineseName:"維他命A"},
    {className:"vitamin_C",chineseName:"維他命C"},
    {className:"Potassium",chineseName:"鉀"},
  ])

  return (
    <>
      <aside className="col-md-2 d-none d-lg-block ">
        <div className="tagGroup ms-4">
          {tag.map((item, index) => {
            const { className, tagName } = item;
            return <Tag key={index} tagName={tagName} className={className} />;
          })}
        </div>
        <div className="progressgroup">
          <p className="h4 text-center">每周營養所需</p>
          {nutrients.map((item,index)=>{
            const{className,chineseName}=item
            return <Progress key= {index} className={className} chineseName={chineseName} />
          })}
        </div>
      </aside>
    </>
  );
}
export default LeftAside;
