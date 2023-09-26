const app = require("express")();

app.get("/redirect", function (req, res) {
  res.redirect(req.query["target"]);
});
