import React from 'react'
import ProductImages from './ProductImages'

function Images(props) {
    const {images} = props
    return (
        <>  
            <ProductImages
                Images={images}
            />
        </>
    )

}

export default Images