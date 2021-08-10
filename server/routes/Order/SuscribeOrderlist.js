const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
  let suscribeorderlist = await connection.queryAsync(`SELECT
    subscribe.id,
    subscribe.user_id,
    subscribe.product_id,
    subscribe.subscribe_way,
    subscribe.receiver,
    subscribe.phone,
    subscribe.address,
    subscribe.start_time,
    subscribeway.discount,
    subscribeway.way,
    product.product_name,
    product.images,
    product.fruit_item,
    product.price,
    member_list.name
    FROM subscribe
    LEFT JOIN subscribeway ON subscribe.subscribe_way = subscribeway.id
    LEFT JOIN member_list ON subscribe.user_id = member_list.id
    LEFT JOIN product ON subscribe.product_id = product.id;`);
  res.json(suscribeorderlist);
});

module.exports = router;
