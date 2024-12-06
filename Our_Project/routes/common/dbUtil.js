const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://localhost:27017";
const client = new MongoClient(dbUrl);
var dbdetails = {
    getdbConnection(userData, collectionName, actionType){
        return getDataBaseConn(userData, collectionName, actionType);
    },
    closedbConn(){
        client.close();

    }
};

async function getDataBaseConn(userData, collectionName, actionType) {
  await client.connect();
  var db = client.db("Agro_Connect");
  var collection = db.collection(collectionName);
  switch (actionType) {
    case "signup":
      return collection.insertOne(userData);
      break;
    case "validateCredentials":
      return collection.find({ id: userData.id }).toArray();
      break;
    case 'getProducts':
        return collection.find({}).toArray();
        break;
    case "getSingleProduct":
        
            return collection.find({"product_id":userData.product_id}).toArray();
        
       
  }
}
module.exports=dbdetails;
