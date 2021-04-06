const express = require("express");
const router = express.Router();
const Property = require("../models/property");

router.post("", (req, res, next) => {
  const property = new Property({
    name: req.body.name,
    address: req.body.address,
  });
  console.log("property added, from properties.js", property);
  property.save().then((addedProperty) => {
    res.status(201).json({
      message: "Property added successfully",
      propertyId: addedProperty._id,
    });
  });
});

router.put("/:id", (req, res, next) => {
  const property = new Property({
    _id: req.body.id,
    name: req.body.name,
    address: req.body.address,
  });
  Property.updateOne({ _id: req.params.id }, property).then((result) => {
    console.log(result);
    res.status(200).json({ message: "update completed" });
  });
});

router.get("", (req, res, next) => {
  Property.find().then((documents) => {
    res.status(200).json({
      message: "posts fetched successfully",
      properties: documents,
    });
  });
});

router.get("", (req, res, next) => {
  Property.findById(req.params.id).then((property) => {
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: "property not found" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Property.deleteOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({ message: "post deleted" });
  });
});

module.exports = router;