const express = require('express');
const path = require('path');
const assert = require('assert');
const serveStatic = require('serve-static');
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'friend3';

const mongoClient = new MongoClient(MONGO_DB_URL);

mongoClient.connect((clientConnectErr, client) => {
  assert.equal(null, clientConnectErr);
  console.log('Connected correctly to server');

  const db = client.db(MONGO_DB_NAME);

  // // Insert a single document
  // db.collection('inserts').insertOne({ a: 1 }, (insertOneErr, insertOneResult) => {
  //   assert.equal(null, insertOneErr);
  //   assert.equal(1, insertOneResult.insertedCount);

  //   // Insert multiple documents
  //   db.collection('inserts')
  //     .insertMany([{ a: 2 }, { a: 3 }], (insertManyErr, insertManyResult) => {
  //       assert.equal(null, insertManyErr);
  //       assert.equal(2, insertManyResult.insertedCount);

  //       client.close();
  //     });
  // });

  console.log('DB Connected: ', db);
});

const port = process.env.PORT || 5000;
const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
app.listen(port);

console.log(`Serving on port ${port}`);
