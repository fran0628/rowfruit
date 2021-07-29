import React, { useState, useEffect } from 'react'
import Smallimage from './Smallimage'

function ProductImages(props) {
    const {Images} = props
    // const Imageurl = (Images) ? Images.split(' ') : []
    const Imageurl = Images.split(' ');
    const [image,setImage] = useState('');
    // console.log(Imageurl[0])
    // console.log(typeof(Imageurl[0]))
 
    useEffect(()=>{
      setImage(Images.split(' ')[0])
    },[Images])
    
    return (
        <>  
            <div className="col-xl-5 col-lg-6 mt-2">
              <div className="mainpic">
                <img id="mainproduct" src={image} alt=""/>
              </div>
              <div className="photoslist">
                <ul className="photos list-unstyled d-flex mt-5">
                  {Imageurl.map((item,index) => {
                    return <li><Smallimage key={index} data={item} setImage={setImage} /></li>
                  })}
                </ul>
              </div>
            </div>
        </>
    )

}

export default ProductImages
