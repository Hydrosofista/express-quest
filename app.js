const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

// # ustanowienie połączenia
// mongoose.connect('mongoose://127.0.0.1:27017/express-blog')

app.use("/files", express.static("public"));

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//-----------------------------
// app.get('/', function(req, res) {
//     res.render("home")
// })

app.get("/", function (req, res) {
  res.render("home", {
    title: "My app title",
    content: "Lorem ipsum",
    displayTitle: true,
    names: ["Adam", "Ola", "Kasia", "Tomek"],
  });
});
//-----------------------------

//-----------------------------
app.listen(4444, function () {
  console.log("Serwer Node.js na 4444");
});
