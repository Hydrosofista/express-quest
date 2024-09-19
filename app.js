const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const Users = require("./models/UserModel");

const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/quest");
mongoose
  .connect("mongodb://localhost:27017/quest")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/files", express.static("public"));

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Strona domowa
app.get("/", function (req, res) {
  res.render("home");
});

// tabela urzytkowników
app.get("/users", async function (req, res) {
  try {
    const users = await Users.find({}).lean();
    console.log(users);
    res.render("users", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

//---------------------
const PORT = 4444;
app.listen(PORT, function () {
  console.log("File app.js");
  console.log(`Node.js server running at http://localhost:${PORT}`);
});
