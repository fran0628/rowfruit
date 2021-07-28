import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function MainFruitboxProductItem(props) {
    const { id, product_name, price, images } = props

    // button 連結
    const urlid = String(id)
    const url = "/Mainproduct/"+ urlid

    return (
        <>
            <div className="col-lg-4 col-md-6 g-5">
                <div className="figure"><a href="#/"><img src={images} className="card-img-top" alt="..." /></a></div>
                <div className="card-body">
                    <h3 className="card-title fs-4">{product_name}水果盒</h3>
                    <p className="card-text" style={{fontSize: "19px"}} >體驗一箱 NT $ {price}</p>
                    <Link to={url}>
                        <button className="normal-buy-btn">點此查看</button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default withRouter(MainFruitboxProductItem)