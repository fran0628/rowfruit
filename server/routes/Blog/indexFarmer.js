const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
	const indexFarmerUser = await connection.queryAsync(
		"SELECT id,fram_name,content,avatar,rating FROM `farmer_member`;"
	);
	const indexFarmerUserItem = await connection.queryAsync(
		"SELECT farmer_list_id,fruit_name FROM (customize_label INNER JOIN storage ON customize_label.id=storage.fruittype)INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id"
	);
	// console.log(indexFarmerUserItem[0].farmer_list_id);
	 indexFarmerUser.forEach((framer)=> {
		let item = []
		indexFarmerUserItem.forEach((fruit)=>{
			
			if (fruit.farmer_list_id == framer.id) {
				item.push(fruit.fruit_name);
				Object.assign(framer, { fruit: item });
				// console.log(item);
			}
		})
		item = [];

	 })

	// console.log(indexFarmerUser);
	res.status(200).json(indexFarmerUser);
});

module.exports = router;
