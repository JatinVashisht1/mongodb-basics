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

  // Sorting 🙂
  // to sort in ascending order provide sort arg. 1 ✌
  // to sort in descending order provide sort arg. -1 ✌
  let mySort = {name: 1};
  dbo.collection("customers").find().sort(mySort).toArray(function(err, res){
    if (err) throw err;
    console.log(res);
    db.close();
  });

});
