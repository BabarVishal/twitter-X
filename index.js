const express = require('express');
const { connectToMongoDB } = require("./db/db.conection"); // Destructure the imported object
const app = express();
const port = 3000;

// DbConection
connectToMongoDB("mongodb://127.0.0.1:27017/X").then(() =>
  console.log("Mongodb connected")
);

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// For Frontend...
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));


app.get('/', (req, res) => {
  res.render('Home')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});