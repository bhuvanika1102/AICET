
const mongoose=require("mongoose")
const colors = require("colors");

mongoose.connect("mongodb://0.0.0.0:27017/newwww")
.then(()=>{
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
})
.catch(()=>{
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
})
