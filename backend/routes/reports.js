const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const ReportController = require('../controllers/report')

// routes ===>

router.get("/:id", ReportController.getReportById);
router.post("", checkAuth, ReportController.createReport);
router.get("", ReportController.getAllReports);
// router.get("/reports-by-property/:propertyId", ReportController.GetReportsByProperty)

module.exports = router;