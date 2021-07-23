import React from 'react'
import ProductImages from './ProductImages'

function Images(props) {
    const {images} = props
    console.log(images)
    return (
        <>
            <ProductImages
                ProductImages={images}
            />
        </>
    )

}

export default Images