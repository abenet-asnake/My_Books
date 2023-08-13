const mongoose= require('mongoose');

const db_connect= async()=>{
    try{
    const connect= await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connection established is: ",connect.connection.name,connect.connection.host,connect.connection.port);
}catch(error){
console.log(error);
process.exit(1);
}
}

module.exports=db_connect;