const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",{ useNewUrlParser:true });
                            //name of database that we want to create or connect to

//creating a new schema
const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        //if name is not enterd then following will printed
        required:[true,"Please check your data entry, no name specified!"]
    },
    //add validation for limiting
    //so if we put rating more than 10 , it will give error
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
//                          (collection in singular,schema)
const Fruit = mongoose.model("Fruit",fruitSchema);

// creating a new document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});
// fruit.save();
const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const People = mongoose.model("Person",peopleSchema);
        
const people = new People({
    name:"Gautam",
    age:19          
});

// people.save();

const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "best fruit."
});

const  orange= new Fruit({
    name: "orange",
    rating: 6,
    review: "too sour for me."
});
const  banana= new Fruit({
    name: "banana",
    rating: 10,
    review: "healthy."
});

// Fruit.insertMany([kiwi,orange,banana]).then(result => {
//     console.log(result)
// });

//finding in collection 
// (async () => {
//     // await Person.insertMany(personsArray);
//     const res =  await Fruit.find({});
    
//     //printing out each fruit name
//     res.forEach(function(item){
//         console.log(item.name)
//     })
// })()



// UPDATE
// (async () => {
//     const res = await Fruit.updateOne({_id:"64ca80d424322e9854acc104"},{name:"updated"}) ;
//     console.log("Updated successfully!");
// })()


//DELETE
