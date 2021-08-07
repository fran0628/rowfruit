const express = require("express");
const router = express.Router();
const connection = require("../../utilities/db");

// 新增文章
router.post("/", async (req, res) => {
	const newPost = await connection.queryAsync(
		"INSERT INTO article (title, category, content, author, status,valid) VALUES (?);",
		[
			[
				req.body.title,
				req.body.category,
				req.body.content,
				req.body.author,
				req.body.status,
				0
			],
		]
	);
	
    res.json(newPost)
});

// 更新文章
router.put("/:id", async (req, res) => {
	
	try {
		const post = await connection.queryAsync(
			"SELECT * FROM article WHERE id = ?;",
			req.params.id
		);
		// console.log(post[0].author);
        if(post[0].author === req.body.author){
             try{
                 const updatedPost = await connection.queryAsync(
										"UPDATE article SET title= ?,category= ?, content= ?,author= ?, status= ?,valid=? WHERE id=?",
										[
											req.body.title,
											req.body.category,
											req.body.content,
											req.body.author,
											req.body.status,
											0,
											req.params.id,
											
										]
									);
				res.status(200).json(updatedPost);
            }catch(err){
		        res.status(500).json(err);

            }
        }else{
            res.status(401).json("只能更新自己的文章")
        }
       
	} catch (err) {
		res.status(500).json(err);
	}
});


// // 刪除文章
router.delete("/:id", async (req, res) => {
	try {
		const post = await connection.queryAsync(
			"SELECT * FROM article WHERE id = ?;",
			req.params.id
		);
		// console.log(post)
		// console.log(post[0].author);
		console.log(req.body.author);
        if(post[0].author === req.body.author){
             try{
				//  console.log("YES")
                 const deletePost = await connection.queryAsync(
										"DELETE FROM article WHERE id=?",
										req.params.id,
										
									);
				res.status(200).json(deletePost);
            }catch(err){
		        res.status(500).json(err);

            }
        }else{
            res.status(401).json("只能刪除自己的文章")
        }
       
	} catch (err) {
		res.status(500).json(err);
	}
});

// get的部分
// 全部文章
router.get("/", async (req, res) => {
	const articles = await connection.queryAsync("SELECT * FROM article WHERE status='on';");

	res.json(articles);
});
// 個作者
router.get("/author/:name", async (req, res) => {
	const aticleCat = await connection.queryAsync(
		"SELECT * FROM article WHERE author = ?;",
		req.params.name
	);

	res.json(aticleCat);
});

// 各類別
router.get("/cat/:cat", async (req, res) => {
	const aticleCat = await connection.queryAsync(
		"SELECT * FROM article WHERE category = ?;",
		req.params.cat
	);

	res.json(aticleCat);
});

// 單篇文章
router.get("/:id", async (req, res) => {
	const aticle = await connection.queryAsync(
		"SELECT * FROM article WHERE id = ?;",
		req.params.id
	);

	res.json(aticle);
});

module.exports = router;
