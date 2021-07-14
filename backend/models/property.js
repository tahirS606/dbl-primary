const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    name: String,
    address: String,
    route: Number,
    latitude: Number,
    longitude: Number,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

module.exports = mongoose.model("Property", propertySchema);