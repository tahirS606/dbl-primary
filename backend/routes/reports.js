const express = require("express");
const router = express.Router();
const Report = require("../models/report");
const checkAuth = require("../middleware/check-auth");

router.get("", (req, res, next) => {
    let fetchedReports;
    Task.find()
        .then((documents) => {
            if (Report) {
                res.status(200).json({
                    message: 'reports fetched successfully',
                    fetchedReports: documents
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