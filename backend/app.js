const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose
    .connect(
        "mongodb+srv://odyssic:2eN1o6hj8UHpi8hX@dbl.lkw3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }
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
    const property = req.body;
    console.log(property);
    res.status(201).json({
        message: "property added successfully",
    });
});

app.use("/properties", (req, res, next) => {
    const properties = [{
            id: 1,
            name: "The Biltmore",
            address: "2020 Biltmore",
        },
        {
            id: 2,
            name: "The Phoenix Zoo",
            address: "Galveston Parkway",
        },
    ];
    res.status(200).json({
        message: "posts fetched successfully",
        properties: properties,
    });
});

// exports const app defined above
module.exports = app;