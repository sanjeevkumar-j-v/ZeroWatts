const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("landing")
})

router.use("/codearea", require("./codearea"))


module.exports = router;