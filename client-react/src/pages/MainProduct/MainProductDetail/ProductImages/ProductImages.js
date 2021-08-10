import React, { useState, useEffect } from 'react'
import Smallimage from './Smallimage'

function ProductImages(props) {
    const {Images} = props
    // const Imageurl = (Images) ? Images.split(' ') : []
    const Imageurl = Images.split(' ');
    const [image,setImage] = useState('');
    // console.log(Imageurl[0])
    // console.log(typeof(Imageurl[0]))
    const [dataLoading, setDataLoading] = useState(false);
    useEffect(()=>{
      setDataLoading(true)
      setImage(Images.split(' ')[0])
      setTimeout(() => setDataLoading(false), 500);
    },[Images])
  
    
    if (dataLoading)
    return <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>;

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
