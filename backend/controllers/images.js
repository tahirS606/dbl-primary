const Image = require("../models/image");



exports.createImage =
    (req, res, next) => {

        const url = req.protocol + "://" + req.get("host");
        const image = new Image({
            file: req.body.file,
            imagePath: url + "/images/" + req.file.filename
        });

        image.save().then((createdImage) => {
            res.status(201).json({
                message: "Image added successfully",
                image: {
                    id: '',
                    file: createdImage.file,
                    imagePath: createdImage.imagePath,
                }

            });
        });

        console.log(image)
    }