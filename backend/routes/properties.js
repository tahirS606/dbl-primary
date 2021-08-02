const express = require("express");
const router = express.Router();

const Property = require("../models/property");
const checkAuth = require("../middleware/check-auth");
const PropertyController = require('../controllers/property');

router.get("/:id", PropertyController.getPropertyById);

router.get("", PropertyController.getAllProperties);

router.post("", checkAuth, PropertyController.createProperty);

router.put("/:id", checkAuth, PropertyController.editProperty);

router.delete("/:id", checkAuth, PropertyController.deleteProperty);

module.exports = router;