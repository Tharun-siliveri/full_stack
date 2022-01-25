const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Define Application
const app = express();

// Define database connection
const db = mongoose.connect(process.env.CONNECTION_STRING);

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use CORS
app.use(cors());

app.get("/", function (req, res) {
  res.send({ ping: "pong" });
});

require("./src/routes/centerRoutes")(app);
require("./src/routes/userRoutes")(app);
require("./src/routes/appointmentRoutes")(app);
require("./src/routes/cityRoutes")(app);
require("./src/routes/devRoutes")(app);

app.listen(process.env.PORT || 8080, function () {
  console.log("Server is running");
});
