import React, { useState } from 'react';
import "./Login.css";
import { BsEnvelope } from "react-icons/bs";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useDispatch } from "react-redux";
// import profile from "../../images/Profile.png";
import logo from "../../images/Profile.png";
import { register } from '../../Redux/actions/userAction';

const Register = () => {
    const dispatch = useDispatch(); 

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const {name, email, password} = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState({logo});

    
    const submitHandler= (e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm));
    }

    const registerDataChange = (e) => {
        if(e.target.name === "avatar"){
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value})
        }
    }



    return (
        <div className='login-container'>
            <div className='login-main'>
                <form className='login-form' encType="multipart/form-data" onSubmit={submitHandler}>
                    <div className='login-heading'>
                        <h4>REGISTER</h4>
                    </div>
                    <div className='login-div'>
                        <BsPerson />
                        <input type='text' placeholder='UserName' required name='name' value={name} onChange={registerDataChange}/>
                    </div>
                    <div className='login-div'>
                        <BsEnvelope />
                        <input type='email' placeholder='Email' required name='email'  value={email} onChange={registerDataChange}/>
                    </div>
                    <div className='login-div'>
                        <BiLockOpenAlt />
                        <input type='password' placeholder='Password'  required name='password'  value={password} onChange={registerDataChange}/>
                    </div>
                    <div id="registerImage">
                        <img src={avatarPreview} alt='Avatar'/>
                        <input type='file' name='avatar' accept='image/' onChange={registerDataChange}/>
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