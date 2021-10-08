const Image = require("../models/image");



exports.createImage =
    (req, res, next) => {
        const image = new Report({
            file: req.body.file,
        });

        report.save().then((addedImage) => {
            res.status(201).json({
                message: "Image added successfully",
                imageId: image._id,
            });
        });
    }