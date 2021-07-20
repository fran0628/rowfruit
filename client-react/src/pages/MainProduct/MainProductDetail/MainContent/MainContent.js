import React from 'react'
import MainEachContent from './MainEachContent'

function MainContent(props) {
    const {fruitnameList, fruitcontent, fruitpicture} = props
    return (
        <>
          <div className="container">
          <div className="container">
            <h2 className="text-center my-5">美白水果盒內容簡介</h2>
            <div className="row">
                <MainEachContent
                    name={fruitnameList.FruitOne}
                    content={fruitcontent.FruitOne}
                    picture={fruitpicture.FruitOne}
                />
                <MainEachContent
                    name={fruitnameList.FruitTwo}
                    content={fruitcontent.FruitTwo}
                    picture={fruitpicture.FruitTwo}
                />
                <MainEachContent
                    name={fruitnameList.FruitThree}
                    content={fruitcontent.FruitThree}
                    picture={fruitpicture.FruitThree}
                />
                <MainEachContent
                    name={fruitnameList.FruitFour}
                    content={fruitcontent.FruitFour}
                    picture={fruitpicture.FruitFour}
                />
            </div>
          </div>
        </div> 
        </>
    )

}

export default MainContent
