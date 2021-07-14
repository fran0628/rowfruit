import React from 'react'
import MainFruitboxProductItem from './MainFruitboxProductItem'


function MainFruitbox(props) {
    const {nameList,priceList,pictureList} = props
    return(
      <>
        <div className="container">
            <div className="fruitlist row">
                <MainFruitboxProductItem
                    name={nameList.FruitboxOne}
                    price={priceList.FruitboxOne}
                    picture={pictureList.FruitboxOne}
                />
                <MainFruitboxProductItem
                    name={nameList.FruitboxTwo}
                    price={priceList.FruitboxTwo}
                    picture={pictureList.FruitboxTwo}
                />
                <MainFruitboxProductItem
                    name={nameList.FruitboxThree}
                    price={priceList.FruitboxThree}
                    picture={pictureList.FruitboxThree}
                />     
            </div>
        </div>
      </>
  )
}





export default MainFruitbox
