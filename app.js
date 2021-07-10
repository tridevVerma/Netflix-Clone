const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));

app.listen(8000, (err) => {
  if (err) {
    console.log("can't connect to server");
  } else [console.log("connected at port : 8000")];
});
