const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");

// 更新會員資料
const putRules = [
	body("email").isEmail().withMessage("請正確輸入 Email 格式"),
	body("password").isLength({ min: 6 }).withMessage("請輸入6字以上密碼"),
	body("confirmPassword")
		.custom((value, { req }) => {
			return value === req.body.password;
		})
		.withMessage("您所輸入的密碼不一致"),
];
router.put("/:id", putRules, async (req, res) => {
	const validatResult = validationResult(req);
	// console.log(validationResul)
	if (!validatResult.isEmpty()) {
		// return next(new Error("登入表單有問題"));
		let error = validatResult.array();
		let errorMsg = {
			title: "登入錯誤",
			text: error[0].msg,
		};
		return res.status(400).json(errorMsg);
	}

	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(req.body.password, salt);
	}
	try {
		const uqdatedUser = await connection.queryAsync(
			"UPDATE farmer_member SET account=?,password=?,name=?,fram_name=?,phonenumber=?,email=?,line=?,address=?,content=?,avatar=?,rating=? WHERE id=?",
			[
				req.body.account,
				req.body.password,
				req.body.name,
				req.body.fram_name,
				req.body.phonenumber,
				req.body.email,
				req.body.line,
				req.body.address,
				req.body.content,
				req.body.avatar,
				req.body.rating,
				req.params.id,
			]
		);
		res.status(200).json(uqdatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});
// 取得會員資料
router.get("/:id", async (req, res) => {
	const farmerUser = await connection.queryAsync(
		"SELECT * FROM farmer_member WHERE id = ?;",
		req.params.id
	);
	const { password, ...others } = farmerUser[0];

	res.status(200).json(others);
});

module.exports = router;
