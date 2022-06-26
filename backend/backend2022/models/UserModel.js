const mongoose = require("../connection");

const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    confirmpassword: String,
});

const model = mongoose.model("users", schema);

module.exports = model;