import React from 'react'

function MainEachContent(props) {
    const {name, content, picture} = props

    return (
        <>
            <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src={picture} alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">{name}</h4>
                  <p>
                  {content}
                  </p>
                </div>
            </div>
        </>
    )

}

export default MainEachContent