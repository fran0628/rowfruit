import React from 'react'
import FruitVariety from './FruitVariety'
function FruitType(props) {
    // console.log("type",props)
    const {fruit_name,fruit_image,items,addCart}=props
    // console.log(items)
    const imageUrl = "http://localhost:3000/images/CustomizedPhotos/"+fruit_name+"/"+fruit_image
    return (
        <>
            <article className="芭樂">
            <div>
              <div className="fruitMenu shadow">
                <div className="smallImageBox">
                  <img
                    className="productImage"
                    src={imageUrl}
                    alt=""
                  />
                </div>
                <a className="btn">▼</a>
              </div>
              {/* 水果項目 */}
              {
                items.map((item)=>{
                  const {id,fruitname,price,unit,wight,images,fram_name,avatar}=item
                  return <FruitVariety key={id} id={id} fruitname={fruitname} price={price} unit={unit} wight={wight} images={images} fram_name={fram_name} avatar={avatar} imageFront={fruit_name}
                    addCart={addCart}
                  />
                })
              }
            </div>
          </article>
        </>
    )
}
export default FruitType