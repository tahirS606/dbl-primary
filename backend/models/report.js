const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
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