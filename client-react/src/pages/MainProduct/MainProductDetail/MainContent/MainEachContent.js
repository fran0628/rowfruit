import React from 'react'

function MainEachContent(props) {
    const { fruitname, content, images } = props
    // console.log(images)
    // console.log(typeof(images))
    return (
        <>
            <div className="col-xl-6 col-lg-12">
                <div className="productpic">
                  <img src={images} alt="" />
                </div>
                <div className="productarticle">
                  <h4 className="text-center">{fruitname}</h4>
                  <p>
                  {content}
                  </p>
                </div>
            </div>
        </>
    )

}

export default MainEachContent