const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, (req,res) => {
  console.log("server start at port 3000")
})

app.get("/home", (req,res) => {

  res.render("home");
})
