const express = require("express");
const router = express.Router();

const Property = require("../models/property");
const checkAuth = require("../middleware/check-auth");
const PropertyController = require('../controllers/property');

// routes ===>

router.put("/:id", checkAuth, PropertyController.editProperty);
router.get("/:id", PropertyController.getPropertyById);
router.get("", PropertyController.getAllProperties);
router.post("", checkAuth, PropertyController.createProperty);
router.delete("/:id", checkAuth, PropertyController.deleteProperty);




module.exports = router;