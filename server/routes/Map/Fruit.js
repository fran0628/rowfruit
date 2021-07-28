const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res)=>{
    let queryResults = await connection.queryAsync("SELECT customize_label.id,fruit_name,fruitname,farmer_list_id,fram_name,address,farmer_member.content,avatar,latitude,longitude FROM ((customize_label INNER JOIN storage ON customize_label.id=storage.fruittype)INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id)INNER JOIN farmer_map ON farmer_member.id=farmer_map.farmer_id");
    res.json(queryResults);
});

module.exports = router;