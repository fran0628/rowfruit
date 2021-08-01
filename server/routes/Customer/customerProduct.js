const express = require("express");
const router = express.Router();

const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
  let fruits = await connection.queryAsync("SELECT id,fruit_name,fruit_image,nutrients,tag FROM customize_label WHERE valid=0")
  //storage and farmer_member joinTable select
  let storages = await connection.queryAsync("SELECT storage.id,storage.imageArray,fruittype,fruitname,price,unit,wight,images,fram_name,avatar,rating,farmer_member.content FROM storage INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id");
  fruits.forEach((fruit)=> {
    let item = []
    storages.forEach( (storage)=> {
      if (storage.fruittype == fruit.id) {
        item.push(storage)
        Object.assign(fruit, { "items": item })
      }
    })
    item=[];
  })
    res.json(fruits);
});


module.exports = router;