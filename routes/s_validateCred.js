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
      
                
                data.msg="Valid";
                req.session.isLoggedInUser=true;
                
          
       
      } else {
        data.msg = "Invalid";
        
      }
      res.send(JSON.stringify(data));

      
    })
    .catch((err) => {})
    .finally(() => {
     dbdetails.closedbConn();
    });
});


module.exports = router;
