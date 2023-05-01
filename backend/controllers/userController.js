const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Register a user

exports.registerUser = catchAsyncErrors(async (req,res) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success:true,
        user
    })
});


//Login User

exports.loginUser = catchAsyncErrors(async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password", 500));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password", 500));
    }

    res.status(200).json({
        success:true,
        user
    })
});

// Get User Detail

exports.getUserDetails = catchAsyncErrors(async (req,res) => {
    const user = await User.findById(req.user.id);

    if(!user){
        return next(new ErrorHandler("User Not Found", 500));
    }

    res.status(200).json({
        success:true,
        user, 
    })
});

// Get All Users -- Admin

exports.getAllUsers = catchAsyncErrors(async (req,res) => {
    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
});

//Get single user -- Admin

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
 
    
    if(!user){
        return next(new ErrorHandler(`User does not exist with id ${req.params.id}`, 500));
    }

    res.status(200).json({
        success:true,
        user
    })
} );

// Delete User -- Admin

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    

    
    if(!user){
        return next(new ErrorHandler(`User does not exist with id ${req.params.id}`, 500));
    }

    await user.deleteOne();

    res.status(200).json({
        success:true,
        message: "User Deleted Successfully"
    })
});