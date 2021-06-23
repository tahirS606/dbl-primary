const { assertNamedType } = require("graphql");
const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    reportTime: String,
    time: String,
    completedBy: String,
    propertyName: String,
    propertyId: String,
    PropertyAddress: String,
    tasks: []
})

module.exports = mongoose.model("Report", reportSchema);