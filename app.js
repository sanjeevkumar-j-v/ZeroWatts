const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser");
const app = express();

var http = require("http");
var request = require('request');
var hackerEarth = require("hackerearth-node");
var hackerEarth = new hackerEarth('c79c38f47874fc0f7d2fa763b4fdf7b31d44fdf7');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server start at port 3000")
})

app.get("/codearea", (req, res) => {
    res.render("codearea");
})
app.post("/codearea", (req, res) => {
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
app.get("/landing", (req, res) => {
    res.render("landing")
})
