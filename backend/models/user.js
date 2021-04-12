const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    // this unique does not throw error from validation standpoint - va;odated below w mongoose. 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema);