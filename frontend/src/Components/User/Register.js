import React from 'react';
import "./Login.css";
import { BsEnvelope } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Register = () => {



    return (
        <div className='login-container'>
            <div className='login-main'>
                <form className='login-form' >
                    <div className='login-heading'>
                        <h4>LOGIN</h4>
                    </div>
                    <div className='login-div'>
                        <BsPerson />
                        <input type='text' placeholder='UserName'/>
                    </div>
                    <div className='login-div'>
                        <BsEnvelope />
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Password' />
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Confirm Password' />
                    </div>
                    <input type="submit" value="Login" className="loginBtn" />
                    <div className='login-div'>
                        <Link to="/login">Already Have an Account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Register;