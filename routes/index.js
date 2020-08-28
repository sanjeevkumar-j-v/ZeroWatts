const express = require("express");

const router = express.Router();

router.get("/codearea", (req, res) => {
    res.render("codearea");
})
router.post("/codearea", (req, res) => {
    console.log(req.body.code);
    var code = req.body.code;
    var lan = req.body.lantype;
    console.log(lan);
    var config = {};
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = code;
    config.input = "";
    config.language = "Py";
    hackerEarth.compile(config, function(err, response) {
        if (err) {
            console.log(err);
        } else {

        }
    });
    hackerEarth.run(config, function(err, response) {
        if (err) {
            console.log(err);
        } else {
            var a = JSON.parse(response)
            console.log(a);
            if (a.compile_status === 'OK') {
                res.send([a.run_status.output, "green"]);
            } else if (a.compile_status !== 'OK') {
                res.send([a.compile_status, "red"]);
            }
        }
    });
})
router.get("/landing", (req, res) => {
    res.render("landing")
})



module.exports = router;