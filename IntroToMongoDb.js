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

  // Drop collection 🙂

  // Method 1 ✌
  // You can delete a table, or collection as it is called in MongoDB, 
  // by using the drop() method.
  dbo.collection("customers").drop(function (err, delOk) {
    if (err) throw err;
    if (delOk) console.log("Collection deleted");

    // delOk is a boolean
    console.log(`delOk object is ${delOk}`)
    // db.close();
  })

  // Method 2 ✌
  // You can also use the dropCollection() method to delete a table (collection).
  // The dropCollection() method takes two parameters: the name of the collection and a callback function.
  // Note: if you ran the Method 1 already, then this command will give error but this is also a method to delete collection.
  dbo.dropCollection("customers", function (err, delOk) {
    if (err) throw err;
    if (delOk) console.log("Collection deleted")
    console.log("deOk is ", delOk);
    db.close();
  })

});
