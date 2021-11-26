"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({ "message": "Hello World from typescript" });
    res.end();
});
app.listen(8080, function () {
    console.log("server started");
});
