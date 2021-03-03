//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//Initialize Express
const app = express();

//If Line 10 does not work, try changing port numbers or change PORT to lowercase, 'port'.
const PORT = process.env.PORT || 3000;
