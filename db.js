// to connect to the database

//remember to rerun on the update.... or download nodemon
// this could be the mongoclient constructor, { useUnifiedTopology: true },
// db.adminCommand( { setFeatureCompatibilityVersion: "5.0" } ) . 
// had to downgrade to fucking 5.0 for no fucking reason
// had to change 'localhost' to '127.0.0.1' 


// The MongoClient constructor creates a client instance, but it doesn’t actually connect to the database. 
// It is recommended to call .connect() method to explicitly connect to the database

const mongoose = require('mongoose');


const databaseURL = 'mongodb://127.0.0.1:27017/CrudDB';
// for other databases, change the string for databaseURL variable  

//connecting to the hosted database using the mongod exe protocol.
mongoose.connect(databaseURL, { useNewUrlParser: true },{ useUnifiedTopology: true }, (err) => {
    if (!err)
        console.log('MongoDB Connection successful...');
    else
        console.log('Error in DB Connection: ' + JSON.stringify(err, undefined, 2));
} );

//need to establish mongodb connection outside of this js file...
//so i need to export the const mondule

module.exports = mongoose;
