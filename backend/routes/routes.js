const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const checkAuth = require("../middleware/check-auth");

router.get("/:route", checkAuth,
    (req, res, next) => {
        console.log('get ran for route')
        console.log(req.params.route)
        Property.find(({ "route": req.params.route })).then((property) => {
            if (property) {
                res.status(200).json(property);
                console.log(property)
            } else {
                res.status(404).json({ message: "property not found" });
            }
        });
    });

module.exports = router;