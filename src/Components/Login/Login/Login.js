import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
    const [loginData, setLoginData] = useState({})
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
        <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card py-3 }px-2">
                    <p class="text-center mb-3 mt-2">LOGIN</p>
                    <div class="row mx-auto ">
                        <div class="col-4"> <i class="fab fa-twitter"></i> </div>
                        <div class="col-4"> <i class="fab fa-facebook"></i> </div>
                        <div class="col-4"> <i class="fab fa-google"></i> </div>
                    </div>
                    <div class="division">
                        <div class="row">
                            <div class="col-3">
                                <div class="line l"></div>
                            </div>
                            
                            <div class="col-6"><span>Email and Password</span></div>
                            <div class="col-3">
                                <div class="line r"></div>
                            </div>
                        </div>
                    </div>
                    <form class="myform" onSubmit={ handleLoginSubmit }>
                        <div class="form-group"> <input onChange={handleOnChange} type="email" class="form-control" placeholder="Email"/> </div>
                        <div class="form-group"> <input onChange={handleOnChange} type="password" class="form-control" placeholder="Password"/> </div>
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1"/> <label class="form-check-label" for="exampleCheck1">Rester connecte</label> </div>
                            </div>
                            <div class="col-md-6 col-12 bn">Mot se passe oublie</div>
                        </div>
                        <div class="form-group mt-3"> <button type="submit" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i> Login</small></button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;