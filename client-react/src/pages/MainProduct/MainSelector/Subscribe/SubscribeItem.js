import React from 'react'

function SubscribeItem(props) {
    const {subname, subprice} = props
    
    return (
        <>
            <div className="col-lg-3 col-md-6 g-2">
                <div className="figure"><a href="#/"><img src="/Mainphotos/1.jpeg" className="card-img-top" alt="..." /></a></div>
                <div className="card-body">
                    <h3 className="card-title">{subname}</h3>
                    <p className="card-text">NT ${subprice}</p>
                    <p className="card-text">精選4-6種水果<br />嚴選在地小農</p>
                </div>
            </div> 
        </>
    )

}

export default SubscribeItem
