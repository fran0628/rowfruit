import React from 'react'
import { BrowserRouter as Link } from "react-router-dom"

function MainFruitboxProductItem(props) {
    const { product_name, price, images} = props

    return (
        <>
            <div className="col-lg-4 col-md-6 g-5">
                <div className="figure"><a href="#/"><img src={images} className="card-img-top" alt="..." /></a></div>
                <div className="card-body">
                <h3 className="card-title">{product_name}水果盒</h3>
                <p className="card-text">NT $ {price}</p>
                <Link to="/Mainproduct"><button className="normal-btn">點此購買</button></Link>
                </div>
            </div>
        </>
    )

}

export default MainFruitboxProductItem