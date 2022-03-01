import mongo from 'mongodb';
import { MongoClient } from 'mongodb';
var url = "mongodb://127.0.0.1:27017/mydb";

const databaseName = "mydb"

// Important: In MongoDB, a database is not created until it gets content!
// a collection in mongodb is same as table in sql
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db(databaseName)
  dbo.createCollection("customers", function(err, res){
    if(err) throw err
    console.log("collection created")
    db.close();
  })
});
