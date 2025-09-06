const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/stand-zukan")
  .then(() => {
    console.log("Connected to stand-zukan database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`stand-zukan listening on port ${PORT}`);
});
