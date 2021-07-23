import React from 'react'
import MainEachContent from './MainEachContent'

function MainContent(props) {
    const { datacontent } = props
    return (
        <>
          <div className="container">
          <div className="container">
            <h2 className="text-center my-5">美白水果盒內容簡介</h2>
            <div className="row"> 
              {datacontent.map((item) => {
                const { id, fruitname, images, content } = item;
                return (
                <MainEachContent
                    key={id}
                    id={id}
                    fruitname={fruitname}
                    content={content}
                    images={images}
                />
                );
                })}
            </div>
          </div>
        </div> 
        </>
    )

}

export default MainContent
