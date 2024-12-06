var express=require("express");
var router=express.Router();
var dbdetails=require("./common/dbUtil");
router.get('/',(req,res)=>{
     var userData=req.query;

    dbdetails.getdbConnection(userData,"productDetails","getProducts").then((result)=>{
        console.log(result);
        res.send(JSON.stringify(result));
       
    }).catch((err)=>{

    }).finally(()=>{
        dbdetails.closedbConn();
    })
});
module.exports=router;