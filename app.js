const express = require("express");
const { db } = require("./models");
const layout = require("./views/layout");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded());

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", function (req, res) {
  res.send(layout(""));
});

app.listen(3000);
