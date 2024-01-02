const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://stoned_me:Atharva_Rasal@cluster0.n2hxo.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log("mongoDB connection successfull");
})

db.on('error' , ()=>{
    console.log("mongoDB connection failed");
})

module.exports =mongoose 