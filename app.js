const express = require("express");
const { db } = require("./models");
const layout = require("./views/layout");
const users = require('./routes/users');
const wiki = require('./routes/wiki');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded());

app.use('/users', users);
app.use('/wiki', wiki);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", function (req, res, next) {
  res.redirect("/wiki");
});

const PORT = 3000;

const init = async() => {
  await db.sync();
  app.listen(PORT, () => {console.log(`server is listening on port ${PORT}`)})
}
init();

// sequelize.sync({ force: true })

// app.listen(3000);
