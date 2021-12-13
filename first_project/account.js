"use strict";
exports.__esModule = true;
var express = require("express");
var account = express.Router();
account.get("/", function (req, res) {
    res.status(200).json({ "message": 'account call' });
    res.end();
});
account.get("/archit", function (req, res) {
    res.status(200).json({ "message": 'archit acccount call' });
    res.end();
});
exports["default"] = account;
