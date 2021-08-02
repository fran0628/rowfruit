const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

router.get("/", async (req, res) => {
//   const fruit = await connection.queryAsync(
//     "SELECT id,fruit_name FROM customize_label"
//   );
// //   console.log(fruit)
//   const fruitInfo = await connection.queryAsync("SELECT customize_label.id,fruit_name,fruitname,farmer_list_id,fram_name,address,farmer_member.content,avatar,latitude,longitude FROM ((customize_label INNER JOIN storage ON customize_label.id=storage.fruittype)INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id)INNER JOIN farmer_map ON farmer_member.id=farmer_map.farmer_id")

const indexFarmerUser = await connection.queryAsync(
    "SELECT id,fram_name,content,avatar,rating FROM `farmer_member`;"
);
const indexFarmerUserItem = await connection.queryAsync(
    "SELECT farmer_list_id,fruit_name FROM (customize_label INNER JOIN storage ON customize_label.id=storage.fruittype)INNER JOIN farmer_member ON storage.farmer_list_id=farmer_member.id"
);
const farmerMap = await connection.queryAsync("SELECT * FROM farmer_map")
// console.log(indexFarmerUserItem[0].farmer_list_id);

 indexFarmerUser.forEach((framer)=> {
    let item = []
    indexFarmerUserItem.forEach((fruit)=>{
        
        if (fruit.farmer_list_id == framer.id) {
            item.push(fruit.fruit_name);
            Object.assign(framer, { fruit: item });
            // console.log(item);
        }
    })
    item = [];

 })
 // item加入經緯度資料
 const fruitMap=[...indexFarmerUser]
 console.log(fruitMap)
 fruitMap.forEach((famer)=>{
    let item =[]
    farmerMap.forEach((position)=>{
        if(position.farmer_id==famer.id){
            item.push(position.latitude,position.longitude)
            Object.assign(famer,{position:item})
        }
    })
    item = [];
})

  res.json(fruitMap);
});

module.exports = router;
