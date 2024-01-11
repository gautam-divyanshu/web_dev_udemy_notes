const express = require("express");
const app = express();

app.get("/", function(request, response) { //browser is making request at home route i.e. /
    response.send("<h1>Hello, World!<h1/> "); //sending response to request of browser
})

app.get("/contact", function(req, res) {
    res.send("<h1>contact me!<h1/> ");
})  

app.get("/about", function(req, res) {
    res.send("<h1>you should know something me 1/> ");
})

// SERVER with port 3000
app.listen(3000, function(){
    console.log("server started on 3000");
});
 