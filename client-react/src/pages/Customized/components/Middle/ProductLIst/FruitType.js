import React from 'react'
import FruitVariety from './FruitVariety'
function FruitType(props) {
    console.log("type",props)
    const {fruit_name,fruit_image,items}=props
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
                  return <FruitVariety id={item.id} fruitname={item.fruitname} price={item.price} unit={item.unit} wight={item.wight} images={item.images} fram_name={item.fram_name} avatar={item.avatar} imageFront={fruit_name}/>
                })
              }



              {/* <FruitVariety/> */}
            </div>
          </article>
        </>
    )
}
export default FruitType