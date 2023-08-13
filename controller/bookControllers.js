const asyncHandler= require('express-async-handler');
//@disc addBooks Add a new Book
//@routes POST /api/books/add
//@access public
const addBooks = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Adding New Books "});
});

//@disc editBooks Edit a Book
//@routes PUT /api/books/
//@access public
const editBooks = asyncHandler(async  (req,res) =>{
    res.status(200).json({message: `Editing The Book for ${req.params.id}`});
});

//@disc deleteBooks Delete a Book
//@routes DELETE /api/books/add
//@access public
const deleteBooks = asyncHandler(async (req,res) =>{
    res.status(200).json({message: `Delete The Book for ${req.params.id}`});
});

//@disc getBooks get all books
//@routes GET /api/books
//@access public
const getBooks = asyncHandler(async  (req,res) =>{
    res.status(200).json({message:`Get the Book by all Books`});
    });

//@disc getBooksByID get Books by ID
//@routes GET /api/books
//@access public
const getBooksByID= asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Get the Book by ${req.params.id}`});
    })

//@disc getBooksByAuthor get Books by ID
//@routes GET /api/books
//@access public
const getBooksByAuthor = asyncHandler(async (req,res) =>{
    const author = req.params.author;
    res.status(200).json({message:`Get the Book by author name ${author}`});
} );

//@disc getBooksByTittle get Books by ID
//@routes GET /api/books
//@access public
const getBooksByTittle = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get Books By Author "});
});

module.exports = {addBooks,editBooks,deleteBooks,getBooks,getBooksByTittle,getBooksByAuthor,getBooksByID};