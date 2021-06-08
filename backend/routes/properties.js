const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const checkAuth = require("../middleware/check-auth");

router.get("/:id", (req, res, next) => {
    Property.findById(req.params.id).then((property) => {
        if (property) {
            res.status(200).json(property)
        } else {
            res.status(404).json({ message: "property not found" });
        }
    });
});

router.get("", (req, res, next) => {
    // query parameters for paginator
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const propertyQuery = Property.find();

    let fetchedProperties;

    if (pageSize && currentPage) {
        propertyQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    propertyQuery
        .find()
        .then((documents) => {
            fetchedProperties = documents;
            return Property.count();
        })
        .then((count) => {
            res.status(200).json({
                message: "properties fetched successfully",
                properties: fetchedProperties,
                maxProperties: count,
            });
        });


    router.post("", checkAuth,
        (req, res, next) => {
            const property = new Property({
                name: req.body.name,
                address: req.body.address,
                route: req.body.route,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            });

            property.save().then((addedProperty) => {
                res.status(201).json({
                    message: "Property added successfully",
                    propertyId: addedProperty._id,
                });
            });
        });

    router.put("/:id", checkAuth, (req, res, next) => {
        const property = new Property({
            _id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            route: req.body.route,
        });
        Property.updateOne({ _id: req.params.id }, property).then((result) => {
            console.log(result);
            res.status(200).json({ message: "update completed" });
        });
    });

    router.delete("/:id", checkAuth, (req, res, next) => {
        Property.deleteOne({ _id: req.params.id }).then((result) => {
            res.status(200).json({ message: "post deleted" });
        });
    });
});

module.exports = router;