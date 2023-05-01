const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true, "Please Enter Your Name"],
        maxLength:[30, "Name cannot excede 30 characters"],
        minLength:[4,"Name should have more than 4 character"]
    },
    email:{
        type:String,
        require:[true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid email"]
    },
    password:{
        type:String,
        require:[true, "Enter Your Password"],
        minLnegth:[8, "Password Should be greater than 8 characters"],
        select: false
    },
    avatar:{
        public_id:{
            type:String,
            // required:true
        },
        url:{
            type:String,
            // required:true 
        }
    },
    role:{
        type:String,
        default: "user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model("User", userSchema);