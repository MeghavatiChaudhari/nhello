const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1',{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>console.log("mongodb connected"))
// .catch(err=>console.error('mongo error',err));

     //or
// async function connectmongodb(){
//     return mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1');
// }
  

    //or

    async function connectmongodb(url){
        return mongoose.connect(url);
    }

module.exports={
    connectmongodb,
};