import * as express from "express";

let app:any=express();

/* app.get("/login",(req:any,res:any):any=>{
    res.status(200).json({login:"login"})
    console.log("login success");
    res.end();
}) */

let auth=(req:any,res:any,next:any)=>{
    let allHeaders=req.headers;
    console.log(req.headers);
    if(allHeaders.token==='abcd')
        next();
    else
        res.status(401).json({auth:"failed"});
}


//PARAMETER 
 app.get("/login/uname/:name/upwd/:pwd",[auth],(req:any,res:any):any=>{
    if(req.params.name==="archit" && req.params.pwd==="jain"){
        res.status(200).json({"login":"success"});
        //res.status(200);
    }
    else{
        res.status(401).json({"login":"failed"});
        //res.status(401);
    }
    res.end();
})


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


app.listen(8080,()=>{
    console.log("server started");
})
