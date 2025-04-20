let express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();


const enquiryRoutes = require("./App/routes/web/enquiryRoutes");


let app=express();
app.use(express.json())
// app.use(express.urlencoded({extended:true}))


app.use("/web/api/enquiry",enquiryRoutes)

// http:localhoat:8000/web/enquiry/enquiry-insert 


//  connect to mongodb
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("db connected")
    app.listen(process.env.PORT,()=>{
        console.log("server start at port"+process.env.PORT)
    })
})