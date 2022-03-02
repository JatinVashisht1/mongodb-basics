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
  var dbo = db.db(databaseName);
  // Filter the Result 🙂
  // When finding documents in a collection, you can filter the result by using a query object.
  // The first argument of the find() method is a query object, and is used to limit the search.
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    // db.close();
  });

  // Filter with Regular Expressions 🙂
  // Reqular expressions can only be used to query strings,
  // You can write regular expressions to find exactly what you are searching for.

  // this will return all the addresses starting with 'S'
  query = { address: /^S/ };
  dbo.collection("customers").find(query, {projection: {_id:0}}).toArray(function(err, res){
    if(err) throw err;
    // JSON.stringigy(*js array*) converts "js array" to JSON object 🔥
    console.log(JSON.stringify(res));
    db.close();
  });

});
