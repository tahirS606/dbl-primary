const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    reportTime: String,
    time: String,
    propertyName: String,
    propertyId: String,
    propertyAddress: String,
    // tasks: { type: mixed },
    // creator: { type: mongoose.Schema.Types.ObjectId },
    mapZoom: Number,
    imagePreviewArray: [String],
})

module.exports = mongoose.model("Report", reportSchema);