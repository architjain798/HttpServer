"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
/* app.get("/login",(req:any,res:any):any=>{
    res.status(200).json({login:"login"})
    console.log("login success");
    res.end();
}) */
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    console.log(req.headers);
    if (allHeaders.token === 'abcd')
        next();
    else
        res.status(401).json({ auth: "failed" });
};
//PARAMETER 
app.get("/login/uname/:name/upwd/:pwd", [auth], function (req, res) {
    if (req.params.name === "archit" && req.params.pwd === "jain") {
        res.status(200).json({ "login": "success" });
        //res.status(200);
    }
    else {
        res.status(401).json({ "login": "failed" });
        //res.status(401);
    }
    res.end();
});
//QUERY PARAMETER
/* app.get("/login",(req:any,res:any):any=>{
    if(req.query.name==="archit" && req.query.pwd==="jain"){
        res.send({"login":"success"});
        res.status(200);
    }
    else{
        res.send({"login":"failed"});
        res.status(401);
    }
    res.end();
}) */
app.listen(8080, function () {
    console.log("server started");
});
