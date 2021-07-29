const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    reportTime: String,
    time: String,
    propertyName: String,
    propertyId: String,
    propertyAddress: String,
    tasks: Array,
    creator: String,
    mapZoom: Number,
    imagePreviewArray: Array,
})

module.exports = mongoose.model("Report", reportSchema);