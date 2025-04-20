let express= require("express");
const { enquiryInsert,enquiryList,enquiryDelete ,enquiryUpdate} = require("../../controller/web/userEnquiryController");
let enquiryRoutes=express.Router();


// ccreate data
enquiryRoutes.post("/enquiry-insert",enquiryInsert)

// read data 
enquiryRoutes.get("/enquiry-list",enquiryList)


// delete data 
enquiryRoutes.delete("/enquiry-delete/:id",enquiryDelete)

// update data
enquiryRoutes.put("/enquiry-update/:id",enquiryUpdate)


module.exports=enquiryRoutes;