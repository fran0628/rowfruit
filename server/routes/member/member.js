const express = require("express");
const router = express.Router();
const User = require('./user.js')
const connection = require("../../utilities/db");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const path = require("path");
const multer = require("multer");


// 全部會員
router.get("/", async (req, res) => {
	const member = await connection.queryAsync(
		"SELECT * FROM member_list"
	);
    
	res.json(member);
	
});
// 單個會員
router.get("/:id", async (req, res) => {
	const member = await connection.queryAsync(
		"SELECT * FROM member_list WHERE id = ?;",
			req.params.id
	);
	
	res.json(member);
	
});

// 會員CRUD
async function executeSQL(
  sql,
  res,
  method = 'get',
  multirows = true,
  instance = {}
) {
  try {
 
    let answer = await connection.queryAsync(sql)
    console.log(answer,answer.insertId)

    switch (method) {
      case 'post': {
        // 仿照json-server的回傳
        const insertId = { id: answer.insertId }
        // 合併id值
        const result = { ...instance, ...insertId }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'put': {
        // 仿照json-server的回傳，有更新到會回傳單一值，沒找到會回到空的物件字串
        // console.log(rows.affectedRows)
        let result = {}
        if (answer.affectedRows) result = { ...instance }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'delete': {
        // 仿照json-server的回傳
        res.status(200).json({})
        break
      }
      case 'get':
      default:
        {
          if (multirows) {
            // res.status(200).json({
            //   users: rows,
            // })
            res.status(200).json(answer)
          } else {
            // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
            let result = {}
            if (rows.length) answer = rows[0]
            res.status(200).json(answer)
          }
        }
        break
    }
  } catch (error) {
    // 錯誤處理
    console.log(error)

    // 顯示錯誤於json字串
    res.status(200).json({
      message: error,
    })
  }
}

// get 處理獲取全部的資料列表
// AND查詢加入`?name=eddy&email=XXX&username=XXXX
router.get('/', (req, res, next) => {
  //console.log(req.query)

  if (!Object.keys(req.query).length) executeSQL(User.getAllUserSQL(), res)
  else executeSQL(User.getUserByQuerySQL(req.query), res)
})

// get 處理獲取單一筆的會員，使用id
router.get('/:userId', (req, res, next) => {
  executeSQL(User.getUserByIdSQL(req.params.userId), res, 'get', false)
})

// post 新增一筆會員資料
router.post('/', (req, res, next) => {
  // 測試response，會自動解析為物件
  // console.log(typeof req.body)
  // console.log(req.body)

  //從request json 資料建立新的物件
  let user = new User(
    req.body.name,
    req.body.account,
    req.body.password,
    req.body.gender,
    req.body.phone,
    req.body.email,
    req.body.address,
    req.body.avatar
  )

  executeSQL(user.addUserSQL(), res, 'post', false, user)
})

//delete 刪除一筆資料
router.delete('/:userId', (req, res, next) => {
  executeSQL(User.deleteUserByIdSQL(req.params.userId), res, 'delete', false)
})

// put 更新一筆資料
router.put('/:userId', (req, res) => {
  let user = new User(
    req.body.name,
    req.body.account,
    req.body.password,
    req.body.gender,
    req.body.phone,
    req.body.email,
    req.body.address,
    req.body.avatar,
    req.body.valid
  )

  // id值為數字
  user.id = +req.params.userId

  executeSQL(user.updateUserByIdSQL(req.params.userId), res, 'put', false, user)
})


  
  module.exports = router;