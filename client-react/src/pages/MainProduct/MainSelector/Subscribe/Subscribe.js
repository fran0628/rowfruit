import React from 'react'
import SubscribeItem from './SubscribeItem'

function Subscribe(props) {
    const {data} = props
    return (
        <>
          <div className="container mt-5">
            <div className="container subscribe row">
                {data.map((item) => {
                    const { id, product_name, fruit_item, price } = item;
                    return (
                    <SubscribeItem
                        key={id}
                        id={id}
                        product_name={product_name}
                        fruit_item={fruit_item}
                        price={price}
                    />
                    );
                })}  
            </div>
        </div> 
        </>
    )

}

export default Subscribe