var express=require("express");
var router=express.Router();
var dbdetails=require("./common/dbUtil")
var bcrypt=require("bcrypt");
router.post('/',(req,res)=>{
    var userData=req.body;
    var data={};
   
        dbdetails.getdbConnection(userData,"userAccountDetails","signup").then((result)=>{
            data.msg="Success";
             res.send(JSON.stringify(data));
         }).catch((err)=>{
                  
         }).finally(()=>{
            dbdetails.closedbConn();
         })
    

   
      
   
});
module.exports=router;