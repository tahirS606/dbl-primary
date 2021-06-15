const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/properties");
const tasksRoutes = require("./routes/tasks")
const userRoutes = require("./routes/user");
const reportsRoutes = require("./routes/reports")
const routesRoutes = require("./routes/routes")

// have yet to update = connect with variables
const app = express();
const password = "9ksalmD9s1Em3GrX";
const userName = "odyssic:";
const databaseName = "dbl";

//mongodb+srv://odyssic:<password>@dbl.lkw3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


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

app.use("/tasks", tasksRoutes)

app.use("/user", userRoutes)

app.use("/reports", reportsRoutes)

app.use("/routes", routesRoutes)

app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
});




module.exports = app;