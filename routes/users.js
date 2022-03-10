const express = require("express");
const router = express.Router();

router.get(function (req, res, next) {
  next()
})

module.exports = router
