import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        alert('hello world')
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card py-3 }px-2">
                        <p className="text-center mb-3 mt-2">LOGIN</p>
                        <div className="row mx-auto ">
                            <div className="col-4"> <i className="fab fa-twitter"></i> </div>
                            <div className="col-4"> <i className="fab fa-facebook"></i> </div>
                            <div className="col-4"> <i className="fab fa-google"></i> </div>
                        </div>
                        <div className="division">
                            <div className="row">
                                <div className="col-3">
                                    <div className="line l"></div>
                                </div>

                                <div className="col-6"><span>Email and Password</span></div>
                                <div className="col-3">
                                    <div className="line r"></div>
                                </div>
                            </div>
                        </div>
                        <form className="myform" onSubmit={handleLoginSubmit}>
                            <div className="form-group"> <input onChange={handleOnChange} type="email" className="form-control" placeholder="Email" /> </div>
                            <div className="form-group"> <input onChange={handleOnChange} type="password" className="form-control" placeholder="Password" /> </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group form-check"> <input type="checkbox" className="form-check-input" id="exampleCheck1" /> <label className="form-check-label" for="exampleCheck1">Rester connecte</label> </div>
                                </div>
                                <div className="col-md-6 col-12 bn">Mot se passe oublie</div>
                            </div>
                            <div className="form-group mt-3"> <button type="submit" className="btn btn-block btn-primary btn-lg"><small><i className="far fa-user pr-2"></i> Login</small></button> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;