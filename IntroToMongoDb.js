import mongo from 'mongodb';
import { MongoClient } from 'mongodb';
var url = "mongodb://127.0.0.1:27017/mydb";

const databaseName = "mydb"

// Important: In MongoDB, a database is not created until it gets content!
// a collection in mongodb is same as table in sql

// In MongoDB we use the find and findOne methods to find data in a collection.
// Just like the SELECT statement is used to find data in a table in a MySQL database.


MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let dbo = db.db(databaseName);

  // Deletion in mongodb 🙂🙂

  // Delete document 🙂
  var query = {adress: "Mountain 21"};
  // Delete one (first) occurence ✌
  dbo.collection("customers").deleteOne(query, function(err, res){
    if(err) throw err;
    console.log("1 document deleted");
    // db.close();
  });

  query = {address: /^S/}
  dbo.collection("customers").deleteMany(query, function(err, obj){
    if(err) throw err;
    console.log("documents deleted!");

    // The deleteMany() method returns an object, 
    // which contains information about how the execution affected the database.
    console.log(obj);
    // You can use this object to return the number of deleted documents:
    console.log(obj.res, " documents(s) deleted");
    db.close();
  });
});
