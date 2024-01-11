//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB",{useNewUrlParser:true});

const itemsSchema = {
  name:String
};
const Item = mongoose.model("Item",itemsSchema);
const item1 = new Item({
  name:"Welcome to your todolist!"
});
const item2 = new Item({
  name:"Hit the + button to add a new item."
})
const defaultItems = [item1,item2];
 
app.get("/", function(req, res) {
  (async ()=>{
    const foundItems = await Item.find({});

    if(foundItems.length===0){
      (async ()=>{
        const res = await Item.insertMany(defaultItems).then(
          console.log("Successfull array added!")
        )
      })()
      res.redirect("/");
    }else{
    res.render("list", {listTitle:"Today", newListItems: foundItems});
    }
  })()


});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const newItemDB = new Item({
    name:itemName
  })
  newItemDB.save(); //mongoose shortcut
  res.redirect("/");
 
});

app.post("/delete",function(req,res){
  const checkedBoxId = req.body.checkbox;
  (async ()=>{
    const result = await Item.findByIdAndRemove(checkedBoxId).then(
      console.log("Successfully deleted check out.")
    );
    res.redirect("/");
  })()
})

app.get("/:customListName",function(req,res){
  const customListName = req.params.customListName;
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
