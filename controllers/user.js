const user = require('../models/user');

async function handleGetuser(req,res){
    const alldbuser = await user.find({});
    return res.json(alldbuser);
}

module.exports={
    handleGetuser,
}