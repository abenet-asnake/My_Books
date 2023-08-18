const asyncHandler= require('express-async-handler');
//@disc registerUsers registering new users
//@routes POST /api/users/register
//@access public
const registerUsers=asyncHandler(async(req,res)=>{
    res.status(200).json({message: "New User Registered successfully"});
});

//@disc loginUsers 
//@routes POST /api/users/login
//@access public
const loginUsers = asyncHandler(async(req,res)=>{
    res.status(200).json({message: "You are Login successfully"});
});

//@disc currentUsers 
//@routes POST /api/users/current
//@access public
const currentUsers = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "The Current User"});
});

//@disc logout 
//@routes GET /api/users/logout
//@access public
const logoutUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "The Current User"});
});

module.exports ={registerUsers,loginUsers,currentUsers,loginUsers,logoutUser};
