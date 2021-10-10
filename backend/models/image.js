const mongoose = require("mongoose");


const imageSchema = mongoose.Schema({
    file: Buffer,
    imagePath: { type: String, required: true }
})

module.exports = mongoose.model("Image", imageSchema);