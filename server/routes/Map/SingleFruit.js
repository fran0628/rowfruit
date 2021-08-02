const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
   
    const SingleFruit = await connection.queryAsync(
        "SELECT `fruit_name` FROM `customize_label`"
    );
   
    res.json(SingleFruit);
});

module.exports = router;