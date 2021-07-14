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
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mapZoom: Number,
})

module.exports = mongoose.model("Report", reportSchema);