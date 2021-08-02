import React, { useState, useEffect } from "react";
import "./IndexMain.scss"
import $ from "jquery";


function IndexMain() {
	useEffect(() => {
		let fullPageScrollTop = $(".mainproduct").offset().top;
    console.log(fullPageScrollTop)

    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        let translateX = Number(-scrollTop +2437)
        console.log(translateX)
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
								<img src="/Mainphotos/2.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">美白水果盒</h3>
									<span>內容物：</span>
									<span>柑橘,芭樂,番茄,奇異果</span>
								<div class="mainbtn normal-btn mt-4">點此選購</div>
							</div>
							</div> 
						</div>
						<div class="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/2.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">健身水果盒</h3>
									<span>內容物：</span>
									<span>柑橘,芭樂,番茄,奇異果</span>
								<div class="mainbtn normal-btn mt-4">點此選購</div>
							</div>
							</div> 
						</div>
						<div class="fruitbox text-center d-flex">
							<div>
								<img src="/Mainphotos/2.png" alt="" />
								<div class="mt-3">
									<h3 class="mt-3">美白水果盒</h3>
									<span>內容物：</span>
									<span>柑橘,芭樂,番茄,奇異果</span>
								<div class="mainbtn normal-btn mt-4">點此選購</div>
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