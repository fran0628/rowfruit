<<<<<<< HEAD
=======
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
>>>>>>> a5b1c1ce7b5afb7b22c7d91e3a86d175e6714045
