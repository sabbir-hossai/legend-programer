import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className=' ' >
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand ml-5" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link active" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link active" NavLink="#">dashboard</a> */}
                                <NavLink to="/dashboard" className="nav-link active" >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link active" >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {
                              <NavLink to="/login"><button className="btn btn-outline-success" type="submit">Login</button></NavLink>  
                                // <button className="btn btn-outline-success" type="submit">Log out</button>
                            }

                        </form>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;