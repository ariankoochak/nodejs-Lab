const {MongoClient} = require("mongodb")
const DB_URL = "mongodb://0.0.0.0:27017";
const DB_NAME = "my-fist-db";
const client = new MongoClient(DB_URL);
async function connectToMongoDB(){
    await client.connect();
    console.log("connected to mongo");
    const db = client.db(DB_NAME)
    const usersCollection = db.collection('users')
    usersCollection.find({}).toArray().then(res => {
        console.log(res);
    })
}

module.exports = {connectToMongoDB}