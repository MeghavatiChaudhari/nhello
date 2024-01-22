//create first server

// const http = require("http");
//lets make log file
// const fs = require("fs");

// const express = require("express");

// const log = `${Date.now()}:new req received \n`;

// const app = express();
// app.get("/",(req,res)=>{
//     return res.send("hello from / page");
// })
// app.get("/about",(req,res)=>{
//     return res.send("hello from about page" +` ${req.query.name}`);
// })
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

// app.listen(8000,()=>console.log("all went good"));
//  server.listen(8000,()=>console.log('all went good'));

const express = require("express");
const fs = require("fs");
const {connectmongodb} = require('./connection');
const http = require("http");
const app = express();
const users = require("./MOCK_DATA.json");
app.use(express.json());
const userRouter = require('./routes/user')
connectmongodb("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=>{console.log('server created')})
// const { default: mongoose } = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1',{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>console.log("mongodb connected"))
// .catch(err=>console.error('mongo error',err));
// const userSchema = new mongoose.Schema({
//   firstName:{
//     type:String,
//     required:true
//   },
//   lastName:{
//     type:String,
//     required:true
//    },
//   email:{
//     type:String,
//     },
//    gender:{
//     type:String
//   },
//   // id:{
//   // function(){
//   //   id+=id;
//   //  }
//   // }
//    },
//    {timestamps:true //this shows time entry//
//   });

  //define method on scehma
  // userSchema.method.generateuniqueId=function(){
  //   return `${id=id+1}`;
  // }

  // const user = mongoose.model("user",userSchema);

// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });

// app.get("/users", (req, res) => {
//   const html = `<ul> ${users
//     .map((user) => `<li>${user.first_name}</li>`)
//     .join("")}</ul>`;
//   return res.send(html);
// });
//dynamic path parametrs
// app.get("/api/users/:id", async(req, res) => {
//     const userfound = await user.findById(req.params.id);
  // const uid = Number(req.params.id);
  // const user = users.find((user) => user.id === uid);
//   return res.status(200).json(userfound);
// });

// we can merge api/users/id into one because the same
// route is used by patch , delete , post
//middleware
app.use(express.urlencoded({ extended: false }));
app.use((req,res,next)=>{
  console.log("hello from my middleware");
  next();
})
// app
//   .route("/api/users")
//   .get((req, res) => {
//     const uid = Number(req.params.id);
//     const user = users.find((user) => user.id === uid);
//     return res.status(201).json(user);
//   })
//   .patch((req, res) => {
//     return res.json({ status: "pending" });
//   })
//   .post(async(req, res) => {
//     try{
//       const {firstName,lastName,email,gender}=req.body;
//       if(!firstName || !lastName){
//           return res.status(400).json({error:"all fields are mandatory"});
//       }
//       const result = await user.create({
//         firstName,
//         lastName,
//         email,
//         gender,
//       });
    
    // const body = req.body;
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   return res.status(201).json({ status: "sucess", id: users.length });
    // });


  //   console.log(result);
  //   return res.status(201).json({msg:"suceesed"});
  //   }catch(error){
  //     console.error('user creaetion failed',error.message);
  //     return res.status(500).json({error:'internal server error'});
  //   }
  // });
app.use('/api/users',userRouter);
app.listen(8000, () => console.log("server created"));

