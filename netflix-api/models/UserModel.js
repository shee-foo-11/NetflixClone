const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        reqired: true,
        unique: true,
        max: 50,
    },
    liedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);