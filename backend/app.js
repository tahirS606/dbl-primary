const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/properties");
const userRoutes = require("./routes/user");

// have yet to update = connect with variables
const app = express();
const password = "9ksalmD9s1Em3GrX";
const url =
    "mongodb+srv://<username></username><password></password>.lkw3g.mongodb.net/dbl?retryWrites=true&w=majority";
const username = "odyssic";
const databaseName = "dbl";

mongoose
    .connect(
        "mongodb+srv://odyssic:9ksalmD9s1Em3GrX@dbl.lkw3g.mongodb.net/dbl?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
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
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/properties", propertiesRoutes);

app.use("/user", userRoutes)


module.exports = app;