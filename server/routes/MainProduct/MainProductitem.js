const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

// 全部內容
router.get("/", async (req, res) => {
	const productitems = await connection.queryAsync(
		"SELECT * FROM product_item;"
	);
	
	res.json(productitems);
});
// 單樣產品內容
router.get("/:id", async (req, res) => {
	const productitem = await connection.queryAsync(
		"SELECT * FROM product_item WHERE id = ?;",
        req.params.id
	);
	
	res.json(productitem);
});


module.exports = router;