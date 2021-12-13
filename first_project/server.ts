import * as express from "express";
import transaction from "./transcations";
import account from "./account";


let app:any=express();


app.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Hello World from typescript"});
    res.end();
})

app.use("/module1",transaction);
app.use("/module2",account);

app.listen(8080,()=>{
    console.log("server started");
})