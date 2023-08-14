// importing the express module 
const express= require('express');
const { addBooks, 
         editBooks, 
         deleteBooks, 
         getBooks, 
         getBooksByID, 
         getBooksByAuthor, 
         getBooksByTittle } = require('../controller/bookControllers');
const routes = express.Router();
// defining all routes
routes.post('/add', addBooks);

routes.put('/:id',editBooks);

routes.delete('/:id',deleteBooks );

routes.get('/',getBooks);
    

routes.get('/:id',getBooksByID );

routes.get('/:author', getBooksByAuthor);

routes.get('/:tittle',getBooksByTittle );

module.exports = routes;