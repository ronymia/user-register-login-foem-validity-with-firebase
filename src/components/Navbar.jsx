import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="">
                <h3>React Form Validity</h3>
            </div>
            <nav className="navBar">
                <ul>
                    <li><NavLink to="/">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
