const express = require("express");
const router = express.Router();
const Report = require("../models/report");
const checkAuth = require("../middleware/check-auth");

router.post("", checkAuth,
    (req, res, next) => {
        const report = new Report({
            date: req.body.date,
            time: req.body.time,
            mapZoom: req.body.mapZoom,
            completedBy: req.body.completedBy,
            route: req.body.route,
            propertyName: req.body.name,
            propertyAddress: req.body.address,
            propertyLatitude: req.body.latitude,
            propertyLongitude: req.body.longitude,

        });

        report.save().then((addedReport) => {
            res.status(201).json({
                message: "Report added successfully",
                propertyId: addedReport._id,
            });
        });
    });

// add put version (from properties example)


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