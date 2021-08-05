const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
  let orderlist = await connection.queryAsync(`SELECT 
    order_list.id,
    order_list.receiver,
    order_list.phone,
    order_list.address,
    order_list.create_time,
    order_list.total_price,
    order_list_detail.product_id,
    order_list_detail.count,
    order_list_detail.price,
    order_list_detail.amount,
    product.product_name,
    member_list.id,
    member_list.name
  FROM order_list_detail
    LEFT JOIN order_list ON order_list.id = order_list_detail.po_id
    LEFT JOIN member_list ON order_list.member_id = member_list.id
    LEFT JOIN product ON order_list_detail.product_id = product.id
  WHERE order_list.valid = 1;`);
  res.json(orderlist);
});
router.post("/", async (req, res) => {
  try {
    //前端BODY拿到ㄉ東西存到變數裡面
    const { memberId, totalPrice, address, receiver, phone, items } = req.body;

    const { insertId } = await connection.queryAsync(
      "INSERT INTO order_list (member_id, total_price, create_time, address, receiver, phone, valid) VALUES (?, ?, CURRENT_TIME(), ?, ?, ?, 1)",
      [memberId, totalPrice, address, receiver, phone]
    );
    //mysql不能讀取陣列,所以要變成陣列的陣列(Node.js MySQL Insert Into/w3cshool)
    const details = items.map(({ productId, price, count, content }) => [
      //insertId=po_id,
      insertId,
      productId,
      count,
      price,
      content,
    ]);

    await connection.queryAsync(
      "INSERT INTO order_list_detail (po_id, product_id, count, price, content) VALUES ?",
      [details]
    );

    res.status(200).json({ success: true});
  } catch (e) {
    console.error(`failed to create order - ${e.message}`);
    res.status(400).json({ success: false, errorMessage: e.message });
  }
});
module.exports = router;
