import React from "react";
import TitleTag from './TitleTag'
import {v4} from 'uuid'
import FruitType from "./ProductLIst/FruitType";
function Middle(props) {
  const {data}=props
  const title = [
    { className: "title-all", title: "全部商品", buttonClass: "allButton" },
    {
      className: "title-whitening",
      title: "美白商品",
      buttonClass: "whiteningButton",
    },
    {
      className: "title-slimming",
      title: "瘦身商品",
      buttonClass: "slimmingButton",
    },
    {
      className: "title-silverHair",
      title: "銀髮族",
      buttonClass: "silverHairButton",
    },
    { className: "title-vision", title: "顧眼睛", buttonClass: "visionButton" },
  ];
  return (
    <>
      <main className="col-12 col-lg-6 customizedProduct">
       <TitleTag key={v4()} className={title[0].className} title={title[0].title} buttonClass={title[0].buttonClass} />
        <p className="introduction">
          點擊圖片查看詳細資訊，可以按<i className="far fa-plus-square"></i>
          加入客製化水果盒
        </p>
        {/* 全部商品 */}
        
        <div className="all">
        {
          data.map((item,index)=>{
            const {id,fruit_name,fruit_image,items}=item
            return <FruitType key={id} id={id} fruit_name={fruit_name} fruit_image={fruit_image}  items={items} />
          })
        }

        {/* <FruitType data={data}/> */}
        </div>
      </main>
    </>
  );
}
export default Middle;
