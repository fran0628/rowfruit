const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

// 全部內容
router.get("/", async (req, res) => {
	// const productitems = await connection.queryAsync(
	// 	"SELECT product_name, fruit_item, product.price, fruitname, content, product.images FROM product INNER JOIN product_item on product.id=product_item.product_id;");
	const productitems = await connection.queryAsync("SELECT * FROM product");
	const productcontents = await connection.queryAsync("SELECT * FROM product_item");

	productitems.forEach((productitem)=>{
		let item = []
		productcontents.forEach((productcontent)=>{
			if(productcontent.product_id == productitem.id)
			item.push(productcontent)
			Object.assign(productitem, { items: item });
		  })
		  item=[]
	})
	res.json(productitems);
});
// 全部產品
router.get("/:id", async (req, res) => {
	const productitem = await connection.queryAsync(
		"SELECT product_name, fruit_item, product.price, fruitname, content, product.images FROM product INNER JOIN product_item on product.id=product_item.product_id WHERE product.id = ?;",req.params.id);
		
	
	res.json(productitem);
});


module.exports = router;