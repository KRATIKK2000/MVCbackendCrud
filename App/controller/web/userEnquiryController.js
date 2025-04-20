
let enquiryModel=require("./models/enquiry.model")


let enquiryInsert=(req,res)=>{

    let {sName, sEmail, sPhone ,sMessage}=req.body
    let enquiry= new enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    })
 
    enquiry.save().then(()=>{
        res.send({status:1,message:"Enquiry saved successfully"})
    }).catch((err)=>{
        res.send({status:0 ,message:"err while saving file" ,err:err})
    })
    
}

let enquiryList=async (req,res)=>{
    let enquiryList= await enquiryModel.find()
    res.status(200).json({status:1,message:"enquiry list",data:enquiryList})
}

let enquiryDelete=async (req,res)=>{
    let enquiryId= req.params.id;
    let deleteEnquiry = await enquiryModel.deleteOne({_id:enquiryId})
   res.send({status:1,message:"enquiry delete successfully",id:enquiryId , delres:deleteEnquiry})

}

let enquiryUpdate=async (req,res)=>{
    let enquiryId = req.params.id;
    let {sName, sEmail, sPhone ,sMessage}=req.body
 let updateObj={
    name:sName,
    email:sEmail,
    phone:sPhone,
    message:sMessage
 }
    let updateRes= await enquiryModel.updateOne({_id:enquiryId},updateObj)
    res.send({status:1,message:"enquiry update successfully",id:enquiryId, updateRes})
}

module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate}