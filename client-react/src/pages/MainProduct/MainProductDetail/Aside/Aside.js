import React from 'react'
import AsideProduct from './AsideProduct'

function Aside(props) {
    // const {fruitboxname, fruitboxcontent} = props
    const {asidedata} = props
    
    return (
        <>
           <div className="otherproducts col-xl-2">
              <div className="ms-4 mb-2">
                <h5 className="ms-3 text-center">
                  瀏覽其它商品 &nbsp;<i className="fas fa-caret-down"></i>
                </h5>
              </div>
              
              {/* <AsideProduct
                name={fruitboxname.FruitboxOne}
                content={fruitboxcontent.FruitcontentOne}
                />
              <AsideProduct
                name={fruitboxname.FruitboxTwo}
                content={fruitboxcontent.FruitcontentTwo}
                /> */}
            </div>
        </>
    )

}

export default Aside
