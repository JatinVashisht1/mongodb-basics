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
  var dbo = db.db(databaseName)

  // Find One 🙂
  // firstOne returns the first occurence in the selection
  // the first parameter in the findOne function is a query parameter
  // if we give empty query object to the query parameter then it selects all documents and returns the first one
  dbo.collection("customers").findOne({}, function (err, res) {
    if (err) throw err;
    console.log("find one executed");
    // res is the result object and it returns info about document inserted
    // an example is below statement
    console.log(`result is ${res.name}`);
    // db.close();
  });

  // Find All 🙂
  // find is used to select all the occurences of the result
  // if we provide empty query parameter then it will return all the documents
  dbo.collection("customers").find({}).toArray(function (err, res) {
    if (err) throw err;
    console.log(res);
    // db.close();
  });

  // Find Some 🙂
  // The second parameter of the find() method is the projection object that describes which fields to include in the result.
  // This parameter is optional, and if omitted, all fields will be included in the result.

  // in projection 0 meanse we don't want to include that field and 1 means we want to include that
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, res) {
    if (err) throw err;
    console.log(res);

    // As you can see from the result of the example above, the result can be converted into an array containing each document as an object.

    console.log("2nd element of array is: ",res[2].address, "\n--------------\n");
    // db.close();
  })

  

  // To exclude the _id field, you must set its value to 0
  dbo.collection("customers").find({}, { projection: { name: 1 } }).toArray(function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  })


  // You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field)
  /*
  dbo.collection("customers").find({}, {projection :{name: 1, address:0}}).toArray(function(err, res){
    if(err) throw err;
    console.log(res);
    db.close();
  })
  */


});
