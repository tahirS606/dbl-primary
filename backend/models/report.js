const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    id: String,
    date: Date,
    time: String,
    mapZoom: Number,
    completedBy: String,
    route: Number,

    Property: {
        id: String,
        name: String,
        address: String,
        latitude: Number,
        longitude: Number,

    },
    // tasks
    tasks: [{
        completedAt: String,
        polygons: [{
            coords: [{ lat: Number, long: Number }],
            tasksCompleted: String,
            lineColor: String,
            fillColor: String,
        }]
    }]
});

module.exports = mongoose.model("Report", reportSchema);