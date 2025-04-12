var express=require("express");
var router=express.Router();
router.get('/',(req,res)=>{
    var sessionInfo={
        "isLoggedIn":false,
    }
    if(req.session&&req.session.isLoggedInUser){
       sessionInfo.isLoggedIn=true;
    }
    res.send(JSON.stringify(sessionInfo))
});
module.exports=router;