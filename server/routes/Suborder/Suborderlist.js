const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
  let suborderlist = await connection.queryAsync(
    "SELECT id, user_id, product_id, subscribe_way, receiver, phone, address, start_time, end_time FROM subscribe;"
  );
  res.json(suborderlist);
});

router.post("/", async (req, res) => {
  try {
    //拿到前端東西存到變數裡面
    const {memberId, product_id, subscribe_way, receiver, phone, address} = req.body;

    await connection.queryAsync(
      "INSERT INTO subscribe (user_id, product_id, subscribe_way, receiver, phone, address, start_time, end_time, status, valid) VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIME(),CURRENT_TIME(), 1, 1)",
      [memberId, product_id, subscribe_way, receiver, phone, address]
    );

    res.status(200).json({ success: true});
  } catch (e) {
    console.error(`failed to create order - ${e.message}`);
    res.status(400).json({ success: false, errorMessage: e.message });
  }
});

module.exports = router;
