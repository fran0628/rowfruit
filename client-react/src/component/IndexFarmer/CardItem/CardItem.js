import React from 'react'
import './carditem.scss'
import cardIcon from "./framer_icon/201.jpg";
import starIcon from "./framer_icon/star5.png"

function CardItem() {
    return (
			<>
				<div className="card border-0 rounded-0 farm-card me-5 fr-card">
					<div className="if-rating position-absolute">
						<img src={starIcon} className="object-fit" alt="" />
					</div>
					<img src={cardIcon} className="card-img-top object-fit" alt="..." />
					<div className="card-body">
						<h5 className="card-title">小吳有機果園</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							種植水果：蘋果、香蕉、橘子
						</h6>

						<p className="card-text">
							在地小農，自家種植，自產自銷 有機無毒無農藥，
							天天去豆漿店載豆渣佐以奶粉、養樂多、黑糖來施肥
							在地小農辛苦種植，保證安心健康新鮮 農場水果圖：
						</p>
					</div>
				</div>
			</>
		);
}
export default CardItem;