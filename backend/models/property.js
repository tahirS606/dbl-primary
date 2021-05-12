const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model("Property", propertySchema);