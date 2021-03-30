const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Property", propertySchema);
