import React from 'react'
import "./IndexMain.scss"
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';


function IndexMain() {
	<ParallaxBanner 
    className = "your-class" 
    layers = { [ 
        { 
            image : '/Mainphotos/2.png' , 
            amount : 0.1 , 
        } , 
        { 
            image : '/Mainphotos/2.png' , 
            amount : 0.2 , 
        } , 
    ] } 
    style = { { 
        height : '500px' , 
    } } 
> 
   
	</ParallaxBanner>
	
    return (
			<>
			<div className="sliderbg">
				<div className="slider">
					<div className="productbox d-flex">
						<ParallaxProvider> 
							<div classsName="mainbac">
								<div className="productbox">
									<Parallax x={[200, -100]} y={[-30, 60]} tagOuter="figure">
										<img src="/Mainphotos/2.png" alt=""/>
										<h3 className="mt-3 text-center">美白水果盒</h3>
									</Parallax>
								</div>
							</div>		
						</ParallaxProvider> 
						<ParallaxProvider> 
							<div classsName="mainbac">
								<div className="productbox">
									<Parallax x={[300, -100]} y={[-30, 60]} tagOuter="figure">
										<img src="/Mainphotos/2.png" alt=""/>
										<h3 className="mt-3 text-center">美白水果盒</h3>
									</Parallax>
								</div>
							</div>		
						</ParallaxProvider> 
						<ParallaxProvider> 
							<div classsName="mainbac">
								<div className="productbox">
									<Parallax x={[400, -100]} y={[-30, 60]} tagOuter="figure">
										<img src="/Mainphotos/2.png" alt=""/>
										<h3 className="mt-3 text-center">美白水果盒</h3>
									</Parallax>
								</div>
							</div>		
						</ParallaxProvider> 
				</div>
				</div>
			</div>
				
			
		{/* <div className="mainproductbackground">
            		<div className="mainproduct">
						<div className="d-flex">
						<div className="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/2.png" alt=""/>
								<div className="mt-3">
								<h3 className="mt-3">美白水果盒</h3>
								<span>內容物：</span>
								<span>柑橘,芭樂,番茄,奇異果</span>
								<div className="mainbtn normal-btn mt-4">點此選購</div>
								</div>
							</div> 
						</div>
						<div className="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/2.png" alt=""/>
								<div className="mt-3">
								<h3 className="mt-3">美白水果盒</h3>
								<span>內容物：</span>
								<span>柑橘,芭樂,番茄,奇異果</span>
								<div className="mainbtn normal-btn mt-4">點此選購</div>
								</div>
							</div> 
						</div>
						<div className="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/2.png" alt=""/>
								<div className="mt-3">
								<h3 className="mt-3">美白水果盒</h3>
								<span>內容物：</span>
								<span>柑橘,芭樂,番茄,奇異果</span>
								<div className="mainbtn normal-btn mt-4">點此選購</div>
								</div>
							</div> 
						</div>
                	</div>
            	</div>  
        	</div> */}

			
			
			


			</>
		);
}
export default IndexMain;