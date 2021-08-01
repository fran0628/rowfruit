var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connection = require("./utilities/db");
const Promise = require("bluebird");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	res.status(200).json("檔案已上傳");
});

let farmerRouter = require("./routes/Blog/farmerUser");
app.use("/api/farmer", farmerRouter);


let farmerUserAuthRouter = require("./routes/farmMember/farmMemberAuth");
app.use("/api/farmerauth", farmerUserAuthRouter);

let farmerUserRouter = require("./routes/farmMember/farmerUser");
app.use("/api/farmeruser", farmerUserRouter);


    let indexFarmerRouter = require("./routes/Blog/indexFarmer");
		app.use("/api/indexfarmer", indexFarmerRouter);

let postRouter = require("./routes/Blog/post");
app.use("/api/post", postRouter);

let loginRouter = require("./routes/login/login");
app.use("/api/login", loginRouter);


let memberRouter = require("./routes/member/member");
app.use("/api/member", memberRouter);

let customerRouter = require("./routes/Customer/customerProduct");
app.use("/api/customer", customerRouter);


let MapRouter = require("./routes/Map/Map");
app.use("/api/Map/Map", MapRouter);

let FruitRouter = require("./routes/Map/Fruit");
app.use("/api/Map/Fruit", FruitRouter);

let mainRouter = require("./routes/MainProduct/MainProduct");
app.use("/api/mainproduct", mainRouter);

let mainitemRouter = require("./routes/MainProduct/MainProductitem");
app.use("/api/mainitem", mainitemRouter);

let orderlistRouter = require("./routes/Order/Orderlist");
app.use("/api/orderlist", orderlistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	console.log(req.url);
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(5000, async () => {
	await connection.connectAsync();
	console.log(`我跑起來了，在port 5000`);
});

module.exports = app;
