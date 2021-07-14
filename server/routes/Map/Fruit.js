const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res)=>{
    let queryResults = await connection.queryAsync("SELECT * FROM customize_label;");
    res.json(queryResults);
});

module.exports = router;