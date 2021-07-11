const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");


// 全部小農
router.get("/", async (req, res) => {
	const farmerUser = await connection.queryAsync(
		"SELECT * FROM farmer_member;"
	);
	// let farmList=[]
	// for(i=0;i<farmerUser.length;i++){
		
	// 	let { password, ...others } = farmerUser[i];
	// 	farmList += others;
		
	// }
	
    
	res.json(farmerUser);
	
});
// 單個小農
router.get("/:id", async (req, res) => {
	const farmerUser = await connection.queryAsync(
		"SELECT * FROM farmer_member WHERE id = ?;",
			req.params.id
	);
    const {password,...others}=farmerUser[0]
	
	res.json(others);
	
});

module.exports = router;
