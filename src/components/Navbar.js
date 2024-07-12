import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success mt-0">
            
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Services</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to ="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
    );
};

export default Navbar;