const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/index.html",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result = num1+num2;
    res.send("The sum is: "+result);
});

app.get("/mybmiCalculator.html",function(req,res){
    // res.send("<h1>BMI Calculator</h1>");
    res.sendFile(__dirname+"/mybmiCalculator.html");
});

app.post("/mybmiCalculator.html",function(req,res){
    var resbmi = Number(req.body.weight)/Math.pow(Number(req.body.height),2);
    res.send("Your BMI is "+resbmi);
});

app.listen(2000,function(){
    console.log("Server at 2000")
});

