import React, { useState } from 'react';
import "./Login.css";
import { BsEnvelope } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import {useAlert} from "react-alert";

const Register = () => {

    const navigate = useNavigate();

    const alert = useAlert();

    const [userName, setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassowrd] = useState("");

    const userNameHandler=(e)=>{
        setUserName(e.target.value);
    }

    const emailHandler=(e)=>{
        setUserEmail(e.target.value);
    }

    const passwordHandler=(e)=>{
        setUserPassword(e.target.value);
    }

    const confirmPasswordHandler=(e)=>{
        setConfirmPassowrd(e.target.value);
    }

    const submitHandler= (e)=>{
        e.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(userName.length < 3 || userName.length > 10){
            alert.error("Please Enter Correct UserName")
        }else if(!userEmail.match(validRegex)){
            alert.error("Please Enter Valid Email Address");
        }else if(userPassword.length<4){
            alert.error("Password Should be more than 3 Characters");
        }else if(userPassword.length>=15){
            alert.error("Password Cannot excede more than 15 Characters");
        }else if(userPassword !== confirmPassword){
            alert.error("Password And Confirm Password must be same")
        }else {
            alert.success("Registered Successfull");
        }
        
            setUserName(""); 
            setUserEmail("");
            setUserPassword("");
            setConfirmPassowrd("");
            setTimeout(() =>{
                navigate("/");
            }, 2000)
    }


    return (
        <div className='login-container'>
            <div className='login-main'>
                <form className='login-form' onSubmit={submitHandler}>
                    <div className='login-heading'>
                        <h4>REGISTER</h4>
                    </div>
                    <div className='login-div'>
                        <BsPerson />
                        <input type='text' placeholder='UserName' value={userName} onChange={userNameHandler}/>
                    </div>
                    <div className='login-div'>
                        <BsEnvelope />
                        <input type='email' placeholder='Email' value={userEmail} onChange={emailHandler}/>
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Password' value={userPassword} onChange={passwordHandler}/>
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={confirmPasswordHandler}/>
                    </div>
                    <input type="submit" value="Register" className="loginBtn" />
                    <div className='login-div'>
                        <Link to="/login">Already Have an Account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Register;