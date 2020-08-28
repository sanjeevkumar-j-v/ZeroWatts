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

app.use('/',require('./routes'));

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server start at port 3000")
})
