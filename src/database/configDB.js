const mongoose = require('mongoose');

const uri = "mongodb+srv://root:root@cluster0.y9dps.mongodb.net/irent?retryWrites=true&w=majority";

const connectDB = async () =>{
    await mongoose.connect(uri,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("\n=========================================="+
    "\n--------> DATABASE IRENT CONNECTED <------- \n"+
    "==========================================" )
}



module.exports = connectDB;


