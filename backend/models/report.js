const { assertNamedType } = require("graphql");
const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    date: Date,
    time: String,
    completedBy: String,
    property: [],
    tasks: []
})

module.exports = mongoose.model("Report", reportSchema);