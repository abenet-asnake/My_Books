//importing the packages , modules exports
const express= require('express');
const dotenv= require('dotenv').config();
const bookRoutes= require('./routes/booksRoute');
const usersRoutes = require('./routes/usersRoute');

//creating the express app
const app = express();
// middleware of routes in the server 
app.use(express.json());
app.use('/api/books',bookRoutes);
app.use('/api/users',userRoutes);
//creating the server port 
const port=process.env.PORT_NUMBER || 5001; 

// creating the server listening on port
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
