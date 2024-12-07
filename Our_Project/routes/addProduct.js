var express = require('express');
var router = express.Router();
var dbdetails=require("./common/dbUtil")

/* GET home page. */
router.get('/', function(req, res, next) {
 var product=req.query;
 dbdetails.getdbConnection(product,"productDetails","addproduct").then((result)=>{
    res.send(JSON.stringify(result))
 })
});

module.exports = router;
