const User = require("../models/userModels");

//Register a user

exports.registerUser = async (req,res) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success:true,
        user
    })
}


//Login User

exports.loginUser = async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(500).json({
            success:false,
            message: "Please Enter Email and Password"
        })
    }
    const user = await User.findOne({email}).select("+password");

    if(!user){
        return res.status(500).json({
            success:false,
            message: "Invalid Email or Password"
        })
    }

    res.status(200).json({
        success:true,
        user
    })
}

// Get User Detail

exports.getUserDetails = async (req,res) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user, 
    })
}

// Get All Users -- Admin

exports.getAllUsers = async (req,res) => {
    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
}

//Get single user -- Admin

exports.getSingleUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
 
    if(!user) {
        return res.status(500).json({
            success:false,
            message: `User does not exist with id ${req.params.id}`
        })
    }
    res.status(200).json({
        success:true,
        user
    })
} 

// Delete User -- Admin

exports.deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(500).json({
            success:false,
            message: `User Does not exist with id ${req.params.id}`
        })
    }

    await user.deleteOne();

    res.status(200).json({
        success:true,
        message: "User Deleted Successfully"
    })
}