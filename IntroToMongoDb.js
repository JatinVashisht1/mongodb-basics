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
  let myObj = [{ name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}];
  dbo.collection("customers").insertMany(myObj, function(err, res){
    if(err) throw err;
    console.log("many documents inserted");
    // res is the result object and it returns info about document inserted
    // an example is below statement
    console.log(`inserted count is ${res.insertedCount}`);
    db.close();
  });
});
