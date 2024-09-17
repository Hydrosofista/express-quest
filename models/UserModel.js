// # połączenie MongoDB z Mongoose
// Wielka litera

const mongoose = require("mongoose");

const UserTemplate = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: Number,
      lng: Number,
    },
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

module.exports = mongoose.model("UserModel", UserTemplate);
