const mongoose = require("mongoose");


const imageSchema = mongoose.Schema({
    file: Buffer,
})

module.exports = mongoose.model("Image", imageSchema);