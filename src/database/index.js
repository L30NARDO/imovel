const mongoose = require('mongoose');

const uri = "mongodb+srv://root:root@cluster0.y9dps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () =>{
    awaitmongoose.connect(uri,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Banco de dados conectado')
}



module.exports = connectDB;


