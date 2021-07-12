const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");



router.get("/customer",async(req, res)=>{
    let queryResult =await connection.queryAsync("SELECT * FROM customize_label ");
    console.log(queryResult);
    res.send(queryResult);
});