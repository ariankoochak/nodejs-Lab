const express = require("express");
const morgan = require("morgan");
const app = express();
const router = require("./router/routs");
const port = 3000;

app.set('view engine', 'ejs')//for templating

app.use(express.static('public'))//static file folder

app.use(morgan("dev")); //morgan middleware

app.use("/", router);

app.use((req, res) => {
  //not found 404 handling
  res.status(404).send("mimiri mesl adam request bezani??");
});

app.use((err, req, res, next) => {
  // error handling
  console.error(err.stack);
  res.status(500).send("500 yani ridam vali nemidoonam koja!");
});

app.listen(port, (req, res) => {
  console.log("server balaaaaa");
});
