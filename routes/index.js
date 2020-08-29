const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("landing", {
        "title": "ZeroWatts"
    })
})

router.use("/codearea", require("./codearea"))
router.use("/aboutus", require("./aboutus"))


module.exports = router;