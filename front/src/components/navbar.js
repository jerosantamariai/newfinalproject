import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-3" id="leftnav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Sevices</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Barbers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;