const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("Task", propertySchema);