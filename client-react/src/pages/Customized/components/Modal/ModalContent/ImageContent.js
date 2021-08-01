import React,{useState} from 'react'
import BigImage from './BigImage'
import SmallImage from './SmallImage'
function ImageContent({Images}) {
  const imageData = Images
  
  const [image,setImage]=useState([imageData[0]])
  return (
    <div className="container">
      <div>
        <BigImage image={image} />
      </div>
      <div>
        {imageData.map((item, index) => {
          return <SmallImage key={index} data={item} setImage={setImage} />
        })}
      </div>
    </div>
  )
}
export default ImageContent