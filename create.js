//create first server

const http = require("http");
//lets make log file
const fs = require("fs");

const express = require("express");

const log = `${Date.now()}:new req received \n`;

const app = express();
app.get("/",(req,res)=>{
    return res.send("hello from / page");
})
app.get("/about",(req,res)=>{
    return res.send("hello from about page" +` ${req.query.name}`);
})
// const server = http.createServer(app);
// const server = http.createServer((req,res)=>{
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(req.url){
//             case "/":
//                 res.end("homepage");
//                 break;
//             case "/about":
//                 res.end("hey");
//                 break;
//                 default:
//                     res.end("404 not found");
//         }
//         // res.end('hello from server');
//     });
//     console.log(req.headers);
// })

app.listen(8000,()=>console.log("all went good"));
//  server.listen(8000,()=>console.log('all went good'));