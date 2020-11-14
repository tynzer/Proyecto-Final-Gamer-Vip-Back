const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({  
    token : String,
    name : String,
    email : String,
    sendEmail : Boolean,
    enabled:Boolean
});

const userModel = mongoose.model("User",userSchema);

module.exports= userModel;