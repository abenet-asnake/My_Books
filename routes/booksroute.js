// importing the express module 
const express= require('express');
const routes= express.Routes();
// defining all routes
routes.post('/add', (res,req) =>{
    res.status(200).json({message:"Adding New Books "});
});

routes.put('/:id', (res,req) =>{
    res.status(200).json({message: `Editing The Book for ${req.params.id}`});
});

routes.delete('/:id', (res,req) =>{
    res.status(200).json({message: `Delete The Book for ${req.params.id}`});
});

routes.get('/:id', (res,req) =>{
res.status(200).json({message:`Get the Book by ${req.params.id}`});
});

routes.get('/:author', (res,req) =>{
    res.status(200).json({message:"Get Books By Author "});
});

routes.get('/:tittle', (res,req) =>{
    res.status(200).json({message:"Get Books By Author "});
});

module.exports = routes;