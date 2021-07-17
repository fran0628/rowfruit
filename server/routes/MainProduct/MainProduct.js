const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

// 全部產品
router.get("/", async (req, res) => {
	const products = await connection.queryAsync(
		"SELECT * FROM product;"
	);
	
	res.json(products);
});

// 單樣產品
router.get("/:id", async (req, res) => {
	console.log(req.params.id);
	const product = await connection.queryAsync(
		"SELECT * FROM product WHERE id = ?;",
		req.params.id
	);
	
	res.json(product);
});
	

module.exports = router;
