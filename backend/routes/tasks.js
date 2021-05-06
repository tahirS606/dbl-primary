const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const checkAuth = require("../middleware/check-auth");

router.get("", (req, res, next) => {
    let fetchedTasks;
    Task.find()
        .then((documents) => {
            console.log(documents)
            fetchedTasks = documents
            return fetchedTasks
        })
})
module.exports = router;