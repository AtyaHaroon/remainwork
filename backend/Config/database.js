const mongoose = require("mongoose");




const ConnectDB = async()=>{
    try{
    const Conn = await mongoose.connect(process.env.DB);
    console.log("MongoDB Connected !!");
    return Conn;
}catch(error){
    console.error("Error Connecting to MongoDB", error);
    process.exit(1);
}
}
module.exports = ConnectDB