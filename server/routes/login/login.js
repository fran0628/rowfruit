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
	// const token = 'Bearer ' + jwt.sign( { _id:1, id:member.id,account:member.account }, 'secret12345', { expiresIn: 3600 * 24 * 3 }
	const token = 'Bearer ' + jwt.sign( {id:data[0].id,account:data[0].account}, 'secret12345', { expiresIn: 3600 * 24 * 3 }
  )
//   console.log(member[0])

  res.json({ status: 'ok', data: { token: token,name:data[0].name }
  })
    // const member = await connection.queryAsync(
	// 	"SELECT * FROM member_list"
	// );
    
	// res.json(member);
	
});

module.exports = router;
