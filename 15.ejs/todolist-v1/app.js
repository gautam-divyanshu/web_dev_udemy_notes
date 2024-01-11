const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js"); // requiring custom module 
 
const app = express();

app.set("view engine","ejs"); //necessary for using ejs

app.use(bodyParser.urlencoded({extended:"true"}));
app.use(express.static("public")); //for running files like css & other than app.js and list.ejs 
// and give css file path in ejs  (imp!)

let items =["Buy food","cook food","eat food "];
let workItems=[];

let day = date.getDate(); // calling custom module 
app.get("/",function(req,res){
    

    res.render("list" , {listTitle:day , newListItems:items} );
})  

app.get("/work",function(req,res){
    res.render("list" , {listTitle:"Work List" , newListItems:workItems} );
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list===day){
        items.push(item);
        res.redirect("/");
    }
    else{
        items.push(workItems);
        res.redirect("/work");
    }

})



//about page for learning layouts
app.get("/about", function(req,res){
    res.render("about");
})





app.listen("3000",function(){
    console.log("server is running on port 3000");
})

