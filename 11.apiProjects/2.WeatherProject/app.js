const express = require("express");
const https = require("https"); // for make get request to external server, native node module 
const bodyParser = require("body-parser"); // it is the package that's going to allow me to look through the body of the the post request 
                                         // and fetch the data based on the name of my input 

const app = express();
app.use(bodyParser.urlencoded({extended:true})); // necessary for using body parser

// sending html file in response to home route
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    
})
// use to catch the post request of user
app.post("/",function(req,res){
    const cityName = req.body.cityName; //using body parser     
            //https: is imp.
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&APPID=8c2b323ef0205885e64966c582329e7c#";
    //using variable because url is long
    
    // make get request to external server
    https.get(url,function(response){ // res is used before so , name changed
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data); // converting hexadecimal data to javascript object in readable language
console.log(weatherData);
        })
    })
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
})