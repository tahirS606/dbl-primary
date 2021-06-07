const mongoose = require("mongoose");

const routeSchema = mongoose.Schema({
    name: Number,
    properties: [];
    isActive: boolean;
})

module.exports = mongoose.model("Route", routeSchema);