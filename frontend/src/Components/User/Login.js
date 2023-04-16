import React from 'react';
import "./Login.css";
import { BsEnvelope } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";

const Login = () => {
  return (
    <div className='login-container'>
        <div  className='login-main'>
            <form className='login-form'>
            <div className='login-heading'>
                <h4>LOGIN</h4>
            </div>
            <div className='login-div'>
                <BsEnvelope/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='login-div'>
                <BiLockOpenAlt/>
            <input type='password' placeholder='Password'/>
            </div>
            <div className='login-div'>
                <p>Forgot Password ?</p>
            </div>
            <input type="submit" value="login" className="loginBtn" />
            </form>
        </div>
    </div>
  )
}

export default Login;