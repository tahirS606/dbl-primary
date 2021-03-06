const express = require("express");
const router = express.Router();
const multer = require("multer");
const GridFS = require('GridFS').GridFS;
const GridStream = require('GridFS').GridStream;

const Image = require("../models/image");
const checkAuth = require("../middleware/check-auth");
const ImageController = require('../controllers/images');

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
        cb(error, "backend/images");
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


router.post("", multer({ storage: storage }).single("image"), checkAuth, ImageController.createImage);


module.exports = router;