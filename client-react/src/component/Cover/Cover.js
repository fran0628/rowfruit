import React from 'react'
import "./Cover.scss"

 function Cover() {
     
    return (
			<>
            <div className="sliderbg row">
                {/*視覺輪播圖*/} 
                <div className="homeCarousel col-lg-5 p-0">
                    <div><img src="/Mainphotos/13.jpg" alt=""/></div>
                    <div><img src="/Mainphotos/25.jpg" alt=""/></div>
                    <div><img src="/Mainphotos/20.jpg" alt=""/></div>
                    <div><img src="/Mainphotos/28.jpg" alt=""/></div>
                    <div><img src="/Mainphotos/66.jpg" alt=""/></div>
                </div>
                {/*水果盒動畫*/}
                <div className="boxfloat col-lg-7">
                    <img src="/Mainphotos/2.png" className="boxanimate" alt=""/>
                    <h3 className="text-center">精緻水果盒 週週宅配到你家</h3>
                    <div className="d-flex justify-content-center">
                        <div className="enterbtn">點此進入</div>
                        <div className="howsub-btn">了解訂閱方案</div>
                    </div>
                </div>
            </div>
			</>
		);
}
export default Cover;