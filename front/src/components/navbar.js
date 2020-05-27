import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../images/logo-img.png';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-3 d-lg-flex align-items-center" id="leftnav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center">
                    <ul className="nav flex-column vertnav">
                        <li className="nav-item">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration active" to="/">Home</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/aboutus">About Us</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="ourservices">Our Sevices</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/ourbarbers">Our Barbers</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/appointment">Appointment</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/contact">Contact</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/login">Log In</Link></button>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-dark btn-block btn-sm"><Link className="nav-link noDecoration" to="/register">Register</Link></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default withRouter(Navbar);