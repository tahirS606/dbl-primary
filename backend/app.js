const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Property = require("./models/property");

const app = express();

mongoose
    .connect(
        "mongodb+srv://odyssic:2eN1o6hj8UHpi8hX@dbl.lkw3g.mongodb.net/dbl?retryWrites=true&w=majority", { useNewUrlParser: true }
    )
    .then(() => {
        console.log("connected to database!");
    })
    .catch(() => {
        console.log("Connect Failed!");
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/properties", (req, res, next) => {
    const property = new Property({
        name: req.body.name,
        address: req.body.address,
    });
    console.log({ property });
    property.save();
    res.status(201).json({
        message: "property added successfully",
    });
});

app.get("/properties", (req, res, next) => {
    Property.find().then((documents) => {
        console.log({ documents });
        res.status(200).json({
            message: "posts fetched successfully",
            properties: documents,
        });
    });
});

app.delete("/properties/:id", (req, res, next) => {
    Property.deleteOne({ _id: req.params.id }).then((result) => {
        res.status(200).json({ message: "post deleted" });
    });
});

// exports const app defined above
module.exports = app;