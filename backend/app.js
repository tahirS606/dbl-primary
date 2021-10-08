const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const propertiesRoutes = require("./routes/properties");
const tasksRoutes = require("./routes/tasks")
const userRoutes = require("./routes/user");
const reportsRoutes = require("./routes/reports")
const imagesRoutes = require("./routes/images")

// have yet to update = connect with variables
const app = express();
// const password = "iav2DT12DP80gpfZ";
// (newest)
const url =
    "mongodb+srv://<username></username><password></password>.lkw3g.mongodb.net/dbl?retryWrites=true&w=majority";
const username = "odyssic";
const databaseName = "dbl";
const password = "5o1oBc9WEoSJy0pH"

mongoose
    .connect(
        "mongodb+srv://odyssic:5o1oBc9WEoSJy0pH@cluster0.tyijh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    )

.then(() => {
        console.log("connected to database!");
    })
    .catch(() => {
        console.log("Connect Failed!");
    });

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// allows angular to access static for deploy
app.use("/", express.static(path.join(__dirname, "angular")));

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
app.use("/images", imagesRoutes)
app.use("/tasks", tasksRoutes)
app.use("/user", userRoutes)
app.use("/reports", reportsRoutes)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"))
})

module.exports = app;