const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const collection = database.collection('fruits');
    const doc = [
        {
            name:"Apple",
            score:8,
            review:"Great fruit"
        },
        {
            name:"orange",
            score:6,
            review:"kinda sour"
        },
        {
            name:"Banana",
            score:9,
            review:"Great stuff!"
        }
    ];
    
    const result = await collection.insertMany(doc); //await is important
    console.log(`A document was inserted with the size: ${doc.length}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);