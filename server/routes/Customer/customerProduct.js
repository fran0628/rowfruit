const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/",async(req, res)=>{
    let fruit = await connection.queryAsync("SELECT * FROM customize_label WHERE valid=0")
    let storage =await connection.queryAsync("SELECT storage.id,fruittype,fruitname,price,images,	quantity,fram_name FROM storage INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id ORDER BY storage.id");
   
    let item = [];
  for(let n=0;n<fruit.length;n++){
    for(let i=0;i<storage.length;i++){
      if(storage[i].fruittype == fruit[n].id){
        item.push(storage[i])
        Object.assign(fruit[n], {"items": item});
      }
    }
    item=[];
  }
    res.json(fruit);
  });

  router.get("/:item",async(req, res)=>{
    let product = await connection.queryAsync("SELECT * FROM customize_label WHERE id=?",req.params.item);
   
    // console.log(product)
    res.json(product)
  });

module.exports = router ;