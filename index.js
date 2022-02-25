
const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/rolecontroller")
const userController =require("./controller/user-controller")
const serviceController = require("./controller/serviceController")
const catagoryController = require("./controller/catagory-controller")
const vicecatagoryController = require("./controller/vicecatagory-controller")
const feedbackController = require("./controller/feedback-controller")
const serviceProviderController = require("./controller/serviceprovider-Controller")
const userServiceController = require("./controller/user_serviceControlles")
const customerAddressController = require("./controller/customeraddress-controller");
const app = express()

//middle ware 
app.use(express.json()) 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  



//database 
mongoose.connect('mongodb://localhost:27017/localservices',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
  
    res.write("welcome  heloo...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//service
app.post("/service",serviceController.addUser)
app.get("/service",serviceController.getAllUsers)
app.delete("/service/:serviceId",serviceController.deleteService)
app.put("/service",serviceController.updateService)


//catagory
app.post("/catagories",catagoryController.addCatagory)
app.get("/catagory",catagoryController.getAllCatagories)
app.delete("/service/:catagoryId",catagoryController.deleteCatagory)
app.put("/catagories",catagoryController.updateCatagory)


//vicecatagory
app.post("/vicecatagories", vicecatagoryController.addViceCatagory)
app.get("/vicecatagories", vicecatagoryController.getAllViceCatagories)
app.delete(
  "/vicecatagories/:vCatagoryId",
  vicecatagoryController.deleteViceCatagory
)
app.put("/vicecatagories", vicecatagoryController.updateViceCatagory)

//user service
app.post("/userservices", userServiceController.addUserService);
app.get("/userservices", userServiceController.getAllUserServices);
app.delete(
  "/userservices/:userServiceId",
  userServiceController.deleteUserService
);
app.put("/userservices", userServiceController.updateUserService);

//serviceprovider
app.post("/serviceprovider", serviceProviderController.addServiceProvider);
app.get("/serviceprovider", serviceProviderController.getAllServiceProvider);
app.delete(
  "/serviceprovider/:serviceProviderId",
  serviceProviderController.deleteServiceProvider
);
app.put("/serviceprovider", serviceProviderController.updateServiceProvider);

//customer Address
app.post("/customeraddresses", customerAddressController.addCustomerAddress);
app.get("/customeraddresses", customerAddressController.getAllCustomerAddress);
app.delete(
  "/customeraddresses/:customerAddressId",
  customerAddressController.deleteCustomerAddress
);
app.put("/customeraddresses", customerAddressController.updateCustomerAddress);







//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})
