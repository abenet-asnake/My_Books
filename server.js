//importing the packages , modules exports
const express= require('express');
const dotenv= require('dotenv').config();
const bookRoutes= require('./routes/booksRoute');
const usersRoutes = require('./routes/usersRoute');
const errorHandle = require('./middleware/errorhandlingbook');
const db_connect= require('./config/DBConfig');

//creating the express app
const app = express();
// middleware of routes in the server 
app.use(express.json());
db_connect();
//creating the server port 
const port=process.env.PORT_NUMBER || 5001; 
//
app.use('/api/books',bookRoutes);
app.use('/api/users',usersRoutes);
app.use(errorHandle);

// creating the server listening on port
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
