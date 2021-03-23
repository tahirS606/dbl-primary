const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Property", propertySchema);