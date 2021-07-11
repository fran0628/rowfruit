const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

// get的部分
// 全部文章
router.get("/", async (req, res) => {
	const articles = await connection.queryAsync(
		"SELECT * FROM article;"
		
	);
	

	res.json(articles);
});
// 單篇文章
router.get("/:id", async (req, res) => {
	const aticle = await connection.queryAsync(
		"SELECT * FROM article WHERE id = ?;",
		req.params.id
	);
	

	res.json(aticle);
});
// 各類別
router.get("/:cat", async (req, res) => {
	const aticleCat = await connection.queryAsync(
		"SELECT * FROM article WHERE category = ?;",
		req.params.cat
	);
	

	res.json(aticleCat);
});

module.exports = router;
