


const { isUtf8 } = require("buffer");
const fs = require("fs");
//  fs.writeFile("./test.txt","harry asyc",(err)=>{});
fs.writeFileSync("./test1.txt","megha -9177777777")

fs.readFile("test1.txt","Utf8",(err,result)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("result",result);
    }
});
// fs.copyFile("test1.txt","./copy.txt");
fs.cpSync("test1.txt","./copy.txt");








