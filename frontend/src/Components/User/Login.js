import React, { useState } from 'react';
import "./Login.css";
import { BsEnvelope } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {useAlert} from "react-alert";

const Login = () => {

    const navigate = useNavigate();

    const alert = useAlert();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const emailHandler=(e)=>{
        setUserEmail(e.target.value);
    }

    const passwordHandler=(e)=>{
        setUserPassword(e.target.value); 
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!userEmail.match(validRegex)){
            alert.error("Please Enter Valid Email Address");
        }else if(userPassword.length<4){
            alert.error("Password Should be more than 3 Characters");
        }else if(userPassword.length>=15){
            alert.error("Password Cannot excede more than 15 Characters");
        }else {
            alert.success("Login Successfull");
        }

        setUserEmail("");
        setUserPassword("");

        setTimeout(() =>{
                navigate("/");
            }, 2000)
    }
    

    return (
        <div className='login-container'>
            <div className='login-main'>
                <form className='login-form' onSubmit={submitHandler}>
                    <div className='login-heading'>
                        <h4>LOGIN</h4>
                    </div>
                    <div className='login-div'>
                        <BsEnvelope />
                        <input type='text' placeholder='Email' value={userEmail} onChange={emailHandler}/>
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Password' value={userPassword} onChange={passwordHandler}/>
                    </div>
                    <div className='login-div'>
                        <p>Forgot Password ?</p>
                    </div>
                    <input type="submit" value="Login" className="loginBtn" />
                    <div className='login-div'>
                        <Link to="/register">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;