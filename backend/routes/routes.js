const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const checkAuth = require("../middleware/check-auth");

router.get("/:route", (req, res, next) => {
    Property.find(req.params.route).then((property) => {
        if (property) {
            res.status(200).json(property);
        } else {
            res.status(404).json({ message: "property not found" });
        }
    });
});

module.exports = router;