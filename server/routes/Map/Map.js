const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res)=>{
    let queryResults = await connection.queryAsync("SELECT * FROM farmer_map;");
    res.json(queryResults);
});

module.exports = router;