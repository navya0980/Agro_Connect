var express=require("express");
var router=express.Router();
router.get('/',(req,res)=>{
    req.session.destroy();
    res.json("success")
});
module.exports=router;