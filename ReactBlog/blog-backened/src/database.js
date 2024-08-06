import {MongoClient} from "mongodb";
let database;
async function connectToDb(cb) {
    // build the connection with mongodb
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    database = client.db("fullstack-db");// write mongodb collection name here
    cb();
};

export {
    database,
    connectToDb,
};