// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bce12696f628934109d15f7')

    }, {
        $set: { 
            name: 'MyName'
        },
         $inc: { 
             age: 1
            }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });




    // db.close();
});