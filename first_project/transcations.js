"use strict";
exports.__esModule = true;
var express = require("express");
var transaction = express.Router();
transaction.get("/", function (req, res) {
    res.status(200).json({ "message": 'transcation done' });
    res.end();
});
transaction.get("/archit", function (req, res) {
    res.status(200).json({ "message": 'archit transcation done' });
    res.end();
});
exports["default"] = transaction;
