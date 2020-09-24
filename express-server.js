var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World! from the express server");
});

app.listen(8080, () => console.log("listening to port 8080"));
