import * as express from "express";

let account:any=express.Router();

account.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":'account call'});
    res.end();
});

account.get("/archit",(req:any,res:any):any=>{
    res.status(200).json({"message":'archit acccount call'});
    res.end();
});

export default account;