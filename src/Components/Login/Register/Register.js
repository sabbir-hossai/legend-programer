
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/hotel img/login.png"
import Navbar from '../../Homes/Navbar/Navbar';

import "../Login/Login.css"

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser } = useAuth();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={ ...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e =>{
        if (loginData.password !== loginData.password2){
            alert("Your password didn't match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        console.log(registerUser);
        e.preventDefault();
        e.target.reset();
    }
    return ( 
        <>
        <Navbar></Navbar>
        <div class="container p-3 mt-4">
        <div class="row d-flex  m-5 p-2">
            <div class="col-6 col-md-8 col-lg-6 col-xl-5">
                <div class="card py-3 }px-2">
                    
                    
                    <div class="division">
                        <div class="row">
                           
                            
                            <div class="col-12"><span>Register</span></div>
                            <hr class="w-50 m-auto" />
                           
                        </div>
                    </div>
                    <form class="myform" onSubmit={ handleLoginSubmit } >
                        <div class="form-group"> <input onChange={handleOnChange}  type="text" name="name"class="form-control" placeholder="Your Name"/> </div>
                        <div class="form-group"> <input onChange={handleOnChange}  type="email" name="email"class="form-control" placeholder="Email"/> </div>
                        <div class="form-group"> <input onChange={handleOnChange}  type="password" name="password" class="form-control" placeholder="Password"/> </div>
                        <div class="form-group"> <input onChange={handleOnChange}  type="password" name="password2"class="form-control" placeholder="Re-Password"/> </div>
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="form-group form-check"> <label class="form-check-label" for="exampleCheck1"></label> </div>
                            </div>
                            <div class="register col-md-6 col-12 bn "><NavLink   to="/login" style={{textDecoration: 'none',  color: '#213203'}}>Already Registered?Please Login </NavLink>  </div>
                        </div>
                        <div class="form-group mt-3 "> <button type="submit" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i> REGISTER</small></button> </div>
                    </form>
                </div>
            </div>
            <div class="col-6 col-md-8 col-lg-6 col-xl-5" >
                <img  class="login_img" src={login} alt="" />
            </div>
        </div>
    </div>
    </>
    );
};

export default Register;