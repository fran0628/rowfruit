import React from 'react'



function ProductImages(props) {
    const {ProductImages} = props
    console.log(ProductImages)
    console.log(typeof (ProductImages))
    const Imageurl = ProductImages&& ProductImages.split(/\s+/);
    console.log(Imageurl)

    return (
        <>  
            <div className="col-xl-5 col-lg-6 mt-2">
              <div className="mainpic">
                <img id="mainproduct" src="/Mainphotos/10.jpg" alt="" />
              </div>
              <div className="photoslist">
                <ul className="photos list-unstyled d-flex mt-5">
                  <li className="active">
                    <img src={ProductImages} alt="" />
                  </li>
                  {/* <li>
                    <img src="/Mainphotos/14.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/13.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/12.jpg" alt="" />
                  </li> */}
                </ul>
              </div>
            </div>




            {/* <div className="col-xl-5 col-lg-6 mt-2">
              <div className="mainpic">
                <img id="mainproduct" src="/Mainphotos/10.jpg" alt="" />
              </div>
              <div className="photoslist">
                <ul className="photos list-unstyled d-flex mt-5">
                  <li className="active">
                    <img src="/Mainphotos/10.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/14.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/13.jpg" alt="" />
                  </li>
                  <li>
                    <img src="/Mainphotos/12.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div> */}
        </>
    )

}

export default ProductImages
