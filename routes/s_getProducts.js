var express=require("express");
var router=express.Router();
var dbdetails=require("./common/dbUtil");
router.get('/',(req,res)=>{
     var userData=req.query;
     var actionType="getProducts"
     if(userData.product_id){
        actionType="getSingleProduct";
     }

    dbdetails.getdbConnection(userData,"productDetails",actionType).then((result)=>{
        console.log(result);
        res.send(JSON.stringify(result));
       
    }).catch((err)=>{

    }).finally(()=>{
        dbdetails.closedbConn();
    })
});
module.exports=router;