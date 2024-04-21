const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sajalsksk1jan:ptb8wwEBZQk7d8rE@cluster0.r4lcc5e.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", false);

const ConnectMongo=()=>{
        mongoose.connect(mongoURI,()=>{
            console.log("Connected Mongodb Succesfully");
        })
} 

module.exports = ConnectMongo;




// ptb8wwEBZQk7d8rE

