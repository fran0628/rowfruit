import React from 'react'
import './carditem.scss'


const category = [
	"apple",
	"banana",
	"guava",
	"avocado",
	"pineapple",
	"tangerine",
	"kiwi",
	"papaya",
	"watermelon",
	"mango",
];

const categoryText = [
	"蘋果",
	"香蕉",
	"芭樂",
	"酪梨",
	"鳳梨",
	"柑橘",
	"奇異果",
	"木瓜",
	"西瓜",
	"芒果",
];
const convertCategoryToText = (v) => {
	const index = category.indexOf(v);

	return categoryText[index];
};


function CardItem(props) {
	const {farmer}=props
	 const PF = "http://localhost:5000/images/";
	console.log(farmer)
    return (
			<>
				<div className="card border-0 rounded-0 farm-card me-5 fr-card">
					<div className="if-rating position-absolute">
						<img
							src={PF + farmer.rating + ".png"}
							className="object-fit"
							alt=""
						/>
					</div>
					<div className="fr-top">
						<img
							src={PF + farmer.avatar}
							className="card-img-top object-fit"
							alt="..."
						/>
					</div>

					<div className="card-body">
						<h5 className="card-title">{farmer.fram_name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							種植水果：{farmer.fruit && convertCategoryToText(farmer.fruit[0])}
							、{farmer.fruit && convertCategoryToText(farmer.fruit[1])}、
							{farmer.fruit && convertCategoryToText(farmer.fruit[2])}
						</h6>

						<p className="card-text">{farmer.content}</p>
					</div>
				</div>
			</>
		);
}
export default CardItem;