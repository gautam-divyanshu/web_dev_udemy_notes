import express from "express";

const app = express();

app.get("/test", (req,res) => {
  res.send("It works!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000.");
});
