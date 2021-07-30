import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function AsideProduct(props) {
    const {id, name, images} = props

    // button 連結
    const urlid = String(id)
    const urlaside = "/MainProduct/"+ urlid

    return (
        <>
           <div className="asidecard card mb-4" style={{ width: "16rem" }}>
                <img src={images} className="card-img-top" alt="" />
                <div className="asidecardcontent card-body">
                  <h5 className="card-title text-center">{name}水果盒</h5>
                  <Link to={urlaside}>
                    <button className="aside-btn">點此查看</button>
                  </Link>
                </div>
            </div>
        </>
    )

}

export default withRouter(AsideProduct)
