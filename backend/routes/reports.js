const express = require("express");
const router = express.Router();
const Report = require("../models/report");
const checkAuth = require("../middleware/check-auth");

router.get("/:id", (req, res, next) => {
    Route.findById(req.params.id).then((route) => {
        if (Route) {
            res.status(200).json(route)
        } else {
            res.status(404).json({ message: "route not found" });
        }
    });
});

router.post("", checkAuth,
    (req, res, next) => {
        const report = new Report({
            date: req.body.date,
            time: req.body.time,
            completedBy: req.body.completedBy,
            route: req.body.route,
            propertyId: req.body.propertyId,
            propertyName: req.body.propertyName,
            propertyAddress: req.body.propertyAddress,
            propertyLatitude: req.body.propertyLatitude,
            propertyLongitude: req.body.propertyLongitude,
            mapZoom: req.body.mapZoom,
            tasks: req.body.tasks,
            // 
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
    Report.find()
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
            };
        });
});

module.exports = router;