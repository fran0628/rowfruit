import React from 'react'
import BuyContent from './BuyContent.js'

function Buy(props) {
    const {id, product_name, fruit_item, price, images} = props
    return (
        <>
            <BuyContent
                key={id}
                id={id}
                name={product_name}
                fruit_item={fruit_item}
                boxprice={price}
                images={images}  
            />
        </>
    )

}

export default Buy