import React from 'react'
import MainFruitboxProductItem from './MainFruitboxProductItem'


function MainFruitbox(props) {
    const {fruitboxnameList,fruitboxpriceList,fruitboxpictureList} = props
    return(
      <>
        <div className="container">
            <div className="fruitlist row">
                <MainFruitboxProductItem
                    name={fruitboxnameList.FruitboxOne}
                    price={fruitboxpriceList.FruitboxOne}
                    picture={fruitboxpictureList.FruitboxOne}
                />
                <MainFruitboxProductItem
                    name={fruitboxnameList.FruitboxTwo}
                    price={fruitboxpriceList.FruitboxTwo}
                    picture={fruitboxpictureList.FruitboxTwo}
                />
                <MainFruitboxProductItem
                    name={fruitboxnameList.FruitboxThree}
                    price={fruitboxpriceList.FruitboxThree}
                    picture={fruitboxpictureList.FruitboxThree}
                />     
            </div>
        </div>
      </>
  )
}





export default MainFruitbox
