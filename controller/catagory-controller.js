const catagoryModel = require("../model/catagorymodel")

//add

module.exports.addservice = function (req, res) {
    let description = req.body.description
    let service = req.body.service    
    let CatagoryName = req.body.CatagoryName

    let catagory = new CatagoryName({
        description:description,
        CatagoryName:CatagoryName,
        service:service,
            
    })

    Catagory.save(function (err, success) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })
        } else {
            res.json({ msg: "catagory added", data: success, status: 200 })//ye status code he google ko likhna pdta he 
        }
    })

}
//list

module.exports.getAllCatagories = function (req, res) {

    CatagoryModel.find().populate("service").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "catagory retrived.", data: data, status: 200 })//http status code 
        }
    })
}
//delete
module.exports.deleteCatagory = function(req,res){
    
    let CatagoryId = req.params.CatagoryId //postman -> serviceid 

    CatagoryModel.deleteOne({_id:catagoryId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "catagory deleted..", data: data, status: 200 })//http status code 
        }
    })
}

//update

module.exports.updateCatagory = function(req,res){
    let CatagoryId = req.body.catagoryId
    let description = req.body.description
    let service = req.body.service
    let CatagoryName = req.body.CatagoryName
    
    CatagoryModel.updateMany(
        {_id:catagoryId},
        {
            catagoryname:catagoryname,
            description:description,
            service:service,
        },
        function(err,data){
        if(err){
            res.json({msg:"smw",data:req.body,status:-1})
        }else{
            res.json({msg:"catagory updated..",data:data,status:200})
        }
    })
}
