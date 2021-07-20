import React from 'react'

function AsideProduct(props) {
    const {name, content} = props
    return (
        <>
           <div className="asidecard card mb-4" style={{ width: "16rem" }}>
                <img src="/Mainphotos/2.jpg" className="card-img-top" alt="" />
                <div className="asidecardcontent card-body">
                  <h5 className="card-title text-center">{name}</h5>
                  <p className="card-text">
                    {content}
                  </p>
                </div>
            </div>
        </>
    )

}

export default AsideProduct
