import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import "./IndexMain.scss"
import $ from "jquery";


function IndexMain() {
	useEffect(() => {
		let fullPageScrollTop = $(".mainproduct").offset().top;
    // console.log(fullPageScrollTop)

    	$(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        let translateX = Number(-scrollTop +2437)
        // console.log(translateX)
        if(scrollTop>fullPageScrollTop){
        $(".fullBox").css("transform",`translateX(${translateX}px)translateY(150px)`)
        }
    }) 	
});

    return (
		<>
			<div class="mainproductbackground">
				<div id="mainproduct" class="mainproduct">
					<div class="fullBox sticky-top d-flex">
						<div class="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/test1.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">美白水果盒</h3>
									<span>內容物：</span>
									<span>寶島蕉2個  砂糖橘4顆  珍珠芭樂2顆 </span><br/>
									<span>秀女番茄8顆  綠色奇異果2顆  紅肉葡萄柚1顆</span>
								<Link to="/MainProduct/1">
								<div class="mainbtn normal-btn mt-4">點此選購</div>
								</Link>
							</div>
							</div> 
						</div>
						<div class="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/test2.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">健身水果盒</h3>
									<span>內容物：</span>
									<span>寶島蕉4個  珍珠芭樂2顆  富士蘋果1顆</span><br/>
									<span>嘉選一號酪梨3顆  金鑽鳳梨1顆  紅肉葡萄柚1顆</span>
								<Link to="/MainProduct/2">
								<div class="mainbtn normal-btn mt-4">點此選購</div>
								</Link>
							</div>
							</div> 
						</div>
						<div class="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/test3.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">多纖輕盈水果盒</h3>
									<span>內容物：</span>
									<span>台灣二號木瓜1顆  珍珠芭樂1顆  紅龍果3顆</span><br/>
									<span>富士蘋果2顆  紅肉葡萄柚1顆  紫香百香果4顆</span>
								<Link to="/MainProduct/3">
								<div class="mainbtn normal-btn mt-4">點此選購</div>
								</Link>
							</div>
							</div> 
						</div>
					</div>
				</div> 
			</div>
		</>
		);
}
export default IndexMain;