const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());//for req.body

const users = [{ name: "Ehsan", age: 31 }];

// READ
app.get("/", function (req, res) {
  res.send(`User Number: ${users.length}`); //You just send the response and don't specify what it is, and the browser itself recognizes what kind of response you have.
});

// READ
app.get("/user", function (req, res) {
  res.json(users); //We specified that our response is of JSON type
});

// CREATE
app.post("/user", function (req, res) {
  users.push(req.body);
  res.json(users);
});

app.patch("/user/:id", function (req, res) {
  users[req.params.id].name = req.body.updatedName;
  res.json(users);
});

app.put("/user/:id", function (req, res) {
  users[req.params.id].job = req.body.job;
  res.json(users);
});

app.delete("/user/:id", function (req, res) {
  delete users[req.params.id];//delete users[index]
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
