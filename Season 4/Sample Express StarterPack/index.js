const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {//if send request with get method to localhost("/").you recieve Hello world
  res.send("Hello World!");//you can write HTML here
});

app.get("/About", (req, res) => {//if send request with get method to localhost/About.you recieve This is About Page
  res.send("About Page!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
