// Variable Declaration
const fs = require("fs");
const path = require("path");

// READFILE portion
module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
  });
};
