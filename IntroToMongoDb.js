import mongo from 'mongodb';
import { MongoClient } from 'mongodb';
var url = "mongodb://127.0.0.1:27017/mydb";

const databaseName = "mydb"

// Important: In MongoDB, a database is not created until it gets content!
// a collection in mongodb is same as table in sql

// To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.
// A document in MongoDB is the same as a record in MySQL

// Note: If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db(databaseName)
  let myObj = {name: "Company Inc", address: "Highway 37"};
  dbo.collection("customers").insertOne(myObj, function(err, res){
    if(err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
