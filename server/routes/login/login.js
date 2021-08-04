const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {
	const member = await connection.queryAsync( `SELECT * FROM member_list WHERE account = '${req.body.account}' AND password = '${req.body.password}'`);

	var string=JSON.stringify(member); 
	var data = JSON.parse(string)
	console.log(data)
	if(data.length==1) {
		const token = 'Bearer ' + jwt.sign( {id:data[0].id,account:data[0].account}, 'secret12345', { expiresIn: 3600 * 24 * 3 })

	res.json({
		code:200,
		status: 'success', 
		data: { 
			token: token,name:data[0].name
		}})
   
	} else {
		res.json({
			code:401,
			status: 'failure', 
		})
	}
	
	
});

module.exports = router;
