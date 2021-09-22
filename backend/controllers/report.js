const Report = require("../models/report");


exports.getReportById = (req, res, next) => {
    Report.findById(req.params.id).then((report) => {
        if (Report) {
            res.status(200).json(report)
        } else {
            res.status(404).json({ message: "report not found" });
        }
    });
}

exports.getReportsByProperty = (req, res, next) => {

    Report.find({ propertyId: req.params.propertyId }).forEach(printjson)
}

exports.createReport =
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
            areasForReport: req.body.areasForReport,
            creator: req.userData.userId,
            mapZoom: req.body.mapZoom,
            imagePreviewArray: req.body.imagePreviewArray,
            // images: req.body.images,

        });

        report.save().then((addedReport) => {
            res.status(201).json({
                message: "Report added successfully",
                propertyId: addedReport._id,
            });
        });
    }

exports.getAllReports = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const reportQuery =
        Report.find()

    if (pageSize && currentPage) {
        reportQuery
            .skip(pageSize * (currentPage - 1))
            .limit(pageSize)
    }

    Report.find()
        .then((documents) => {
            if (Report) {
                res.status(200).json({
                    message: 'reports fetched successfully',
                    reports: documents
                })
                console.log(documents)
            } else {
                res.status(400).json({
                    message: 'Could not Fetch Reports'
                })
            };
        });
}