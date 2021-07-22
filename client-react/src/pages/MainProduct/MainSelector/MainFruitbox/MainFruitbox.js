import React from 'react'
import MainFruitboxProductItem from './MainFruitboxProductItem'


function MainFruitbox(props) {
    const {data} = props
    return(
      <>
      <div className="container">
        <div className="fruitlist row">
            {data.map((item) => {
                const { id, product_name, price, images } = item;
                return (
                <MainFruitboxProductItem
                    key={id}
                    id={id}
                    product_name={product_name}
                    price={price}
                    images={images}
                />
                );
            })}
        </div>
      </div>
      </>
  )
}


export default MainFruitbox
