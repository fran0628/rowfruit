import React from 'react'
import BuyContent from './BuyContent'

function Buy(props) {
    const {id, product_name, fruit_item, price, images, setCartUpdate} = props
    return (
        <>
            <BuyContent
                key={id}
                id={id}
                name={product_name}
                fruit_item={fruit_item}
                boxprice={price}
                images={images}
                setCartUpdate={setCartUpdate}  
            />
        </>
    )
}


export default Buy
