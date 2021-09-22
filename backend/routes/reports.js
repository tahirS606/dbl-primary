const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const ReportController = require('../controllers/report')


// Multer - put in separate file
const multer = require("multer");

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    },
});

// module.exports = multer({ storage: storage }).single("image");


router.get("/:id", ReportController.getReportById);
router.post("", checkAuth, ReportController.createReport);
router.get("", ReportController.getAllReports);
router.get("", ReportController.getReportsByProperty)

module.exports = router;

// multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } }).single("image"),