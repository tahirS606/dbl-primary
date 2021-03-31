const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: String,
  address: String,
});

module.exports = mongoose.model("Property", propertySchema);
