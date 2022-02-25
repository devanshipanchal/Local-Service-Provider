const mongoose =require("mongoose")

//schema

const serviceSchema= new mongoose.Schema({

    serviceName:{
        type:String,
        required:true
    },
    serviceId:{
        type:Number,
        required:true
    },
    isActive:{
        type:Number,
        default:1,
    },

});

const serviceModel =mongoose.model("service",serviceSchema)
module.exports=serviceModel