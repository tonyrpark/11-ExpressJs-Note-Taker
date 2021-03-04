//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//Initialize Express
const app = express();

//If Line 10 does not work, try changing port numbers or change PORT to lowercase, 'port'.
const PORT = process.env.PORT || 3000;

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Routes File
require("./routes/routes")(app);

//Listener
app.listen(PORT, function () {});
