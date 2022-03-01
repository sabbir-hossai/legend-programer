import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e =>{
        alert('hello world')
        e.preventDefault();
    }
    return (
        <div class="container p-3 mt-4">
        <div class="row d-flex justify-content-center m-4 p-1">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card py-3 }px-2 ">
                    <p class="text-center mb-3 mt-2">LOGIN</p>
                    <div class="row mx-auto ">
                        <div class="col-4"> <i class="fab fa-twitter"></i> </div>
                        <div class="col-4"> <i class="fab fa-facebook"></i> </div>
                        <div class="col-4"> <i class="fab fa-google"></i> </div>
                    </div>
                    <div class="division">
                    <div class="row">
                           
                            
                           <div class="col-12"><span>Email and Password</span></div>
                           <hr class="w-50 m-auto" />
                          
                       </div>
                    </div>
                    <form class="myform" onSubmit={ handleLoginSubmit }>
                        <div class="form-group"> <input onChange={handleOnChange} type="email" class="form-control" placeholder="Email"/> </div>
                        <div class="form-group"> <input onChange={handleOnChange} type="password" class="form-control" placeholder="Password"/> </div>
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="form-group form-check" > <label class="form-check-label" for="exampleCheck1">Forget Password</label> </div>
                            </div>
                            <div class="register col-md-6 col-12 bn "><NavLink   to="/register" style={{textDecoration: 'none', color: '#213203'}}>New User? Please Register</NavLink>  </div>
                        </div>
                        <div class="form-group mt-3 "> <button type="submit" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i> LOGIN</small></button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;