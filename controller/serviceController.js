
const serviceModel = require("../model/servicemodel")

//add

module.exports.addservice = function (req, res) {
    let sName = req.body.serviceName
    let sId = req.body.serviceid    
    let password = req.body.password

    let service = new serviceModel({
        serviceName:serviceName
            
    })

    service.save(function (err, success) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })
        } else {
            res.json({ msg: "service added", data: success, status: 200 })//ye status code he google ko likhna pdta he 
        }
    })

}
//list

module.exports.getAllservices = function (req, res) {

    serviceModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "services retrived.", data: data, status: 200 })//http status code 
        }
    })
}
//delete
module.exports.deleteService = function(req,res){
    //params userid 
    let serviceId = req.params.serviceId //postman -> serviceid 

    serviceModel.deleteOne({_id:serviceId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "deleted..", data: data, status: 200 })//http status code 
        }
    })
}

//update

module.exports.updateService = function(req,res){
    let serviceId = req.body.serviceId
    let serviceName = req.body.serviceName
    
    UserModel.updateOne(
        {_id:serviceId},
        {servicename:servicename},function(err,data){
        if(err){
            res.json({msg:"smw",data:req.body,status:-1})
        }else{
            res.json({msg:"service modified..",data:data,status:200})
        }
    })
}


