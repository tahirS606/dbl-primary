const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    time: String,
    route: Number,
    propertyId: String,
    propertyName: String,
    propertyAddress: String,
    propertyLatitude: Number,
    propertyLongitude: Number,

    // tasks
    tasks: [{
        completedAt: String,
        polygon: [{
            coords: [{ lat: Number, long: Number }],
            tasksCompleted: String,
            lineColor: String,
            fillColor: String,
        }]
    }]
});

module.exports = mongoose.model("Report", reportSchema);