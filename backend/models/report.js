const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    time: String,
    completedBy: String,
    // property
    route: Number,
    propertyId: String,
    propertyName: String,
    propertyAddress: String,
    // map
    propertyLatitude: Number,
    propertyLongitude: Number,
    mapZoom: Number,
    // tasks
    tasks: [{
        areas: [{ lat: Number, long: Number }],
        tasksCompleted: [],
    }]
})

module.exports = mongoose.model("Report", reportSchema);