import React from 'react'

function MainFruitboxProductItem(props) {
    const {name, price, picture} = props

    return (
        <>
            <div className="col-lg-4 col-md-6 g-5">
                <div className="figure"><a href="#/"><img src={picture} className="card-img-top" alt="..." /></a></div>
                <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">NT $ {price}</p>
                <a href="#/"><button className="normal-btn">點此購買</button></a>
                </div>
            </div>
        </>
    )

}

export default MainFruitboxProductItem