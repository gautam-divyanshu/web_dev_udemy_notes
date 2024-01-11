const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/" , function(req,res){
    const wordName = req.body.wordName;
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + wordName;

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const wordData = JSON.parse(data);
            const word = wordData[0].word;
            const defination =wordData[0].meanings[0].definitions[0].definition;
            const example = wordData[0].meanings[0].definitions[0].example;
            res.write("<h1>"+ word+"</h1>");
            res.write("<h3> Defination: "+ defination+"</h3>");
            res.write("<h3> Example: "+ example+"</h3>");
            res.send();
        })
    })
})

app.listen("3000",function(){
    console.log("server is running on port 3000");
})