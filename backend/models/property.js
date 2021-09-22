const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const propertySchema = mongoose.Schema({
    name: String,
    address: { type: String, unique: true, required: true, sparse: true },
    route: Number,
    latitude: Number,
    longitude: Number,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

propertySchema.plugin(uniqueValidator)

module.exports = mongoose.model("Property", propertySchema);