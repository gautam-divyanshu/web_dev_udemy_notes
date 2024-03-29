const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
// calculation
app.post("/",function(req,res){
    
    var num1 = Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var add = num1+num2;

    res.send("the result is  "+add);
})
//bmi calculator
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height =parseFloat(req.body.height);
    var bmi = weight/(height*height);

    res.send("the result is  "+ bmi);
})

app.listen(3000,function(){
    console.log("server is running on 3000");
}) 