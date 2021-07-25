import React from "react";
import TitleTag from "./TitleTag";
import { v4 } from "uuid";
import FruitType from "./ProductLIst/FruitType";
function Middle(props) {
  const { data,addCart } = props;  
  const whiteningData = data.filter((item) => {
    return item.tag.indexOf("whitening") > -1;
  });
  const slimmingData = data.filter((item) => {
    return item.tag.indexOf("slimming") > -1;
  });
  const silverHairData = data.filter((item) => {
    return item.tag.indexOf("silverHair") > -1;
  });
  const visionData = data.filter((item) => {
    return item.tag.indexOf("vision") > -1;
  });
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
        <TitleTag
          key={v4()}
          className={title[0].className}
          title={title[0].title}
          buttonClass={title[0].buttonClass}
        />
        <p className="introduction">
          點擊圖片查看詳細資訊，可以按<i className="far fa-plus-square"></i>
          加入客製化水果盒
        </p>
        {/* 全部商品 */}

        <div className="all">
          {data.map((item) => {
            const {id,fruit_name,fruit_image,items,nutrients}=item
            return (
              <FruitType
                key={id}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
              />
            );
          })}
          <TitleTag
            key={v4()}
            className={title[1].className}
            title={title[1].title}
            buttonClass={title[1].buttonClass}
          />
          {whiteningData.map((item) => {
            const {id,fruit_name,fruit_image,items,nutrients}=item
            return (
              <FruitType
                key={id}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
              />
            );
          })}
          <TitleTag
            key={v4()}
            className={title[2].className}
            title={title[2].title}
            buttonClass={title[2].buttonClass}
          />
          {slimmingData.map((item) => {
            const {id,fruit_name,fruit_image,items,nutrients}=item
            return (
              <FruitType
                key={id}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
              />
            );
          })}
          <TitleTag
            key={v4()}
            className={title[3].className}
            title={title[3].title}
            buttonClass={title[3].buttonClass}
          />
          {silverHairData.map((item) => {
            const {id,fruit_name,fruit_image,items,nutrients}=item
            return (
              <FruitType
                key={id}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
              />
            );
          })}
          <TitleTag
            key={v4()}
            className={title[4].className}
            title={title[4].title}
            buttonClass={title[4].buttonClass}
          />
          {visionData.map((item) => {
            const {id,fruit_name,fruit_image,items,nutrients}=item
            return (
              <FruitType
                key={id}
                addCart={addCart}
                id={id}
                fruit_name={fruit_name}
                fruit_image={fruit_image}
                items={items}
                nutrients={nutrients}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
export default Middle;
