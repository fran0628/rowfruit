import React,{useEffect} from "react";
import FruitVariety from "./FruitVariety";
function FruitType(props) {
  const { fruit_name, fruit_image, items,nutrients,cartData ,addCart,setCounts } = props;

  const imageUrl =
    "http://localhost:3000/images/CustomizedPhotos/" +
    fruit_name +
    "/" +
    fruit_image;
   
  return (
    <>
      <article>
        <div>
          <div className="fruitMenu shadow">
            <div className="smallImageBox">
              <img className="productImage" src={imageUrl} alt="" />
            </div>
         
          </div>
          {/* 水果項目 */}
          {items.map((item) => {
            const {
              id,
              fruitname,
              price,
              unit,
              wight,
              images,
              fram_name,
              avatar,
              rating
            } = item;
            return (
              <FruitVariety
                key={id}
                id={id}
                fruitname={fruitname}
                price={price}
                unit={unit}
                wight={wight}
                images={images}
                fram_name={fram_name}
                avatar={avatar}
                rating={rating}
                imageFront={fruit_name}
                cartData={cartData}
                addCart={addCart}
                nutrients={nutrients}
                setCounts={setCounts}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
export default FruitType;
