const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser");
const app = express();

var http = require("http");
var request = require('request');
var hackerEarth = require("hackerearth-node");
var hackerEarth = new hackerEarth('c79c38f47874fc0f7d2fa763b4fdf7b31d44fdf7');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, (req,res) => {
  console.log("server start at port 3000")
})

app.get("/home", (req,res) => {

  res.render("firstpage");
})
app.post("/home",(req,res)=>{
  console.log(req.body.code);

     var code = req.body.code;
      var lan = req.body.lantype;
      console.log(lan);
     var config={};
        config.time_limit=1;
config.memory_limit=323244;
config.source=code;
config.input="";
config.language="Py";
hackerEarth.compile(config,function(err,response){
      if(err) {
        //deal with error
        console.log(err);
      } else {
        //deal with response

      }
});
hackerEarth.run(config,function(err,response){
      if(err) {
        //deal with error
        console.log(err);
      } else {
        //deal with response
        var a = JSON.parse(response)
        console.log(a);
        if(a.compile_status === 'OK'){
          res.send([a.run_status.output,"green"]);
        }
        else if(a.compile_status !== 'OK'){
          res.send([a.compile_status,"red"]);
        }
      }
});


  /*var program = {
      script :req.body.name,
      language: "python3",
      versionIndex: "0",
      stdin:`6
             7
             8
             5`,
      clientId: "d4a0dc2c72a81f90c50d2257c31f19c7",
      clientSecret:"7f0485032358e87c5271a349248f1719b7dd05739763aea17679f81b4e6b4520"
  };
  request({
      url: 'https://api.jdoodle.com/v1/execute',
      method: "POST",
      json: program
  },

function (error, response, body, program) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.render("firstpage", {test:req.body.name, result:body.output});
  });*/



})
app.get("/landing", (req,res)=>{
  res.render("landing")
})
app.get("/test", (req,res) => {
  res.render("testpage");
})
app.post("/test", (req,res) =>{
  var result = "3";
  console.log(req.body.name);
  res.send(result)
})
