const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    name: String,
    address: String,
    route: Number,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model("Property", propertySchema);