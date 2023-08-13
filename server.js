//importing the packages 
const express= require('express');
const dotenv= require('dotenv').config();

//creating the express app
const app = express();

//creating the server port 
const port=process.env.PORT_NUMBER || 5001; 

// creating the server listening on port
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
