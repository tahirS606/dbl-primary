const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    reportTime: String,
    time: String,
    completedBy: String,
    propertyName: String,
    propertyId: String,
    PropertyAddress: String,
    tasks: [Object],
    mapImage: String,
})

module.exports = mongoose.model("Report", reportSchema);