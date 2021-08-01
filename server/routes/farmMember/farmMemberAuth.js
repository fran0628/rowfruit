const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");


// 註冊表單資料的驗證規則
const registerRules = [
	// body("email").isEmail().withMessage("請正確輸入 Email 格式"),
	body("password").isLength({ min: 6 }).withMessage("請輸入6字以上密碼"),
	body("confirmPassword").custom((value, { req }) => {
		return value === req.body.password;
	}).withMessage("您所輸入的密碼不一致"),
];

//

router.post(
	"/register",	
	registerRules,
	async (req, res, next) => {
		// 加上中間函式express.urlencoded({ extended: false })的設定就可以解讀post資料
		// console.log(req.body);

		const validatResult = validationResult(req);
		// console.log(validationResul)
		if (!validatResult.isEmpty()) {
			// return next(new Error("註冊表單有問題"));
			let error = validatResult.array();
			let errorMsg = {
				title: "資料錯誤",
				text: error[0].msg,
			};
			return res.json(errorMsg);
		}

		// 先檢查是否註冊過
		let checkResult = await connection.queryAsync(
			"SELECT * FROM farmer_member WHERE account=?",
			req.body.account
		);
		if (checkResult.length > 0) {
			let errorMsg = {
				text: "您已註冊過",
				
			};
			return res.json(errorMsg);
		}

		// let filepath = req.file ? "/upload/" + req.file.filename : null;
        const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);

		let result = await connection.queryAsync(
			"INSERT INTO farmer_member (account, password, name,fram_name) VALUES (?)",
			[[req.body.account, hashedPass, req.body.name, req.body.fram_name]]
		);

		res.json(result);
	}
);

const loginRules = [
	// body("account").isEmail(),
	body("password").isLength({ min: 6 }).withMessage("密碼長度小於6碼"),
];

router.post("/login", loginRules, async (req, res, next) => {
	// console.log(req.body);

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

	// 檢查email存不存在
	let member = await connection.queryAsync(
		"SELECT * FROM farmer_member WHERE account=?",
		req.body.account
	);

	if (member.length === 0) {
		let errorMes = {
			title: "登入錯誤",
			text: "查無此帳號",
		};
		return res.status(400).json(errorMes);
	}

	member = member[0];

    
	let result = await bcrypt.compare(req.body.password,member.password);
    // console.log(result)
	if (result) {
		const {password,...others} = member
		res.status(200).json(others)
	}else{
		let errMsg=	 {
			title: "登入失敗",
			text: "請填寫正確帳號密碼",
		};
		res.status(400).json(errMsg)
	}
	
});


module.exports = router;
