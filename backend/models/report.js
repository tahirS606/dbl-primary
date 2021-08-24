const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    time: String,
    propertyName: String,
    propertyId: String,
    propertyAddress: String,
    propertyLatitude: Number,
    propertyLongitude: Number,
    areasForReport: Array,
    creator: String,
    mapZoom: Number,
    imagePreviewArray: Array,
})

module.exports = mongoose.model("Report", reportSchema);