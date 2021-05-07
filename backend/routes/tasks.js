const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const checkAuth = require("../middleware/check-auth");

router.get("", (req, res, next) => {
    let fetchedTasks;
    Task.find()
        .then((documents) => {
            if (Task) {
                res.status(200).json({
                    message: 'tasks fetched successfully',
                    fetchedTasks: documents
                })
                console.log(documents)
            } else {
                res.status(400).json({
                    message: 'fetch failed'
                })
            }

        })
})
module.exports = router;