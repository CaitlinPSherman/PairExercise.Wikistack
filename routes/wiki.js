const express = require("express");
const router = express.Router();
const layout = require("../views/layout");
const addPage = require("../views/addPage");


// router.get("/", function (req, res, next) {
//   res.send('<p>this worked!</p>')
// })
router.get("/", (req, res) => {
  res.send(layout(""));
});

router.post("/", function (req, res, next) {
  res.json(req.body);
})

router.get("/add", function (req, res, next) {
  res.send(addPage());
})

module.exports = router
