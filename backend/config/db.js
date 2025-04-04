const {MongoClient} = require("mongodb");
//add mongoose
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri);

const connectDB = async() =>{
    try{
        await client.connect();
        console.log("MongoDb server is connected to the server");

    }

    catch(err){
        console.error("Error while connecting to db: ", err);
    }
}

module.exports={
    connectDB,
    client
}