const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const Property = require('../models/property');


exports.editProperty = (req, res, next) => {
    const property = new Property({
        _id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        route: req.body.route,
    });
    Property.updateOne({ _id: req.params.id }, property).then((result => {
            if (result.nModified > 0) {
                res.status(200).json({ message: "Update successful" });
            } else {
                res.status(401).json({ message: "Not Authorized." });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Couldn't update Property" })
        }))
}


exports.createProperty = (req, res, next) => {
    const property = new Property({
        name: req.body.name,
        address: req.body.address,
        route: req.body.route,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        creator: req.userData.userId
    });

    dbl.properties.createIndex({ "address": 1 }, { unique: true });

    property.save().then((addedProperty) => {
        res.status(201).json({
            message: "Property added successfully",
            propertyId: addedProperty._id,
        }).catch(error => {
            res.status(500).json({
                message: "Adding property failed"
            })
        });
    });
}

exports.getAllProperties = (req, res, next) => {
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
        })
}

exports.deleteProperty = (req, res, next) => {
    Property.deleteOne({ _id: req.params.id }).then((result) => {
        res.status(200).json({ message: "post deleted" });
    })
}


exports.getPropertyById = (req, res, next) => {
    Property.findById(req.params.id).then((property) => {
        if (property) {
            res.status(200).json(property)
        } else {
            res.status(404).json({ message: "property not found" });
        }
    });
}