const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);
  var result = weight/ (Math.pow(height,2));
  res.send("Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
