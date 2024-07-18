const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", express.static("build"));

app.get("/", function (req, res) {
  res.render("build/index.html");
});

app.listen(port, () => {
  console.log(`Search Hackernews listening at http://localhost:${port}`);
});
