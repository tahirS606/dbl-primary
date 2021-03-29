const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/properties");

const app = express();

mongoose
    .connect(
        "mongodb+srv://odyssic:9ksalmD9s1Em3GrX@dbl.lkw3g.mongodb.net/dbl?retryWrites=true&w=majority", { useNewUrlParser: true }
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

app.use("/properties", propertiesRoutes);

module.exports = app;