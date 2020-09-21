const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("courses");
});

router.get("/python", (req,res) => {
  res.render("program", {
    title: "Python | ZeroWatts",
  });
});

module.exports = router;
