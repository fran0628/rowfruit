const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  //body
  // const email = req.body.email;
  // const name = req.body.name;
  // const desc = req.body.desc;
  // 宣告變數賦予值為req.body
  //
  const { mail, name, desc } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rowfruit@gmail.com",
      pass: "rowfruit123",
    },
  });

  const mailOptions = {
    from: "rowfruit@gmail.com",
    to: mail,
    subject: "ROWFRUIT團隊，已收到您的來信",
    text: `${name}您好，我們是ROWFRUIT團隊，已收到您關於 ${desc} 的留言來信,我們將會盡快回復你的問題,感謝您的來信。`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  const mailOptions2 = {
    from: "rowfruit@gmail.com",
    to: "rowfruitrowfruit@gmail.com",
    subject: `客人${name}傳訊息給你`,
    text: `客人${name}傳訊息給你，內容為${desc}`,
  };

  transporter.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(200).json(req.body);
});

module.exports = router;
