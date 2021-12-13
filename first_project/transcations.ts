import * as express from "express";

let transaction:any=express.Router();

transaction.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":'transcation done'});
    res.end();
});

transaction.get("/archit",(req:any,res:any):any=>{
    res.status(200).json({"message":'archit transcation done'});
    res.end();
});

export default transaction;