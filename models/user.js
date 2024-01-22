const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{
      type:String,
      required:true
    },
    lastName:{
      type:String,
      required:true
     },
    email:{
      type:String,
      },
     gender:{
      type:String
    },
    // id:{
    // function(){
    //   id+=id;
    //  }
    // }
     },
     {timestamps:true //this shows time entry//
    });

    const user = mongoose.model("user",userSchema);
    module.exports=user;