var express = require("express");
var router = express.Router();
var dbdetails=require("./common/dbUtil")
const bcrypt=require('bcrypt');

router.post("/", (req, res) => {
  var userData = req.body;
  var data = {};

  dbdetails.getdbConnection(userData,"userAccountDetails","validateCredentials")
    .then((result) => {
        console.log(result);
      if (result.length) {
        var encryptedpwd=result[0].password;
        var actualpwd=userData.password;
        bcrypt.compare(actualpwd,encryptedpwd,(err,result)=>{
            if(result){
                
                data.msg="Valid";
            }
            else{
                data.msg = "Invalid";
            }
            res.send(JSON.stringify(data));
        })
       
      } else {
        data.msg = "Invalid";
        res.send(JSON.stringify(data));
      }

      
    })
    .catch((err) => {})
    .finally(() => {
     dbdetails.closedbConn();
    });
});


module.exports = router;
