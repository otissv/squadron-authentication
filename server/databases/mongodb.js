/*
* MongoDB connection
*/

// const client = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/test');

import mongodb from 'mongodb';


export default {
  connect (uri) {
    return mongodb.MongoClient.connect(uri, {native_parser:true});
  }
};
