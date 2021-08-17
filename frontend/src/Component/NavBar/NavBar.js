import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-logo"> <Link to="/"><img src={Logo} alt="" /></Link></li>
                <li className="navbar-product"><Link to="/Product">Produkter</Link></li>
                <div className="navbar-btn-help">
                    <button className="navbar-btn"> ? </button>
                </div>
                <li className="navbar-login"><Link to="/Login">Log in </Link></li>
            </ul>

        </nav >
    );
};

export default NavBar;