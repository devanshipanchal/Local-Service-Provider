const mongoose =require("mongoose")

//schema

const UserSchema= new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    isActive:{
        type:String,
        default:1,
    },

});

const UserModel =mongoose.model("user",UserSchema)
module.exports=UserModel