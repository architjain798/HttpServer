"use strict";
exports.__esModule = true;
var express = require("express");
var transcations_1 = require("./transcations");
var account_1 = require("./account");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({ "message": "Hello World from typescript" });
    res.end();
});
app.use("/module1", transcations_1["default"]);
app.use("/module2", account_1["default"]);
app.listen(8080, function () {
    console.log("server started");
});
