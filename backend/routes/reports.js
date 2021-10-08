const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const ReportController = require('../controllers/report')


router.get("/:id", ReportController.getReportById);
router.post("", checkAuth, ReportController.createReport);
router.get("", ReportController.getAllReports);
router.get("", ReportController.getReportsByProperty)

module.exports = router;