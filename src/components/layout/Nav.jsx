import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="navigation" role="navigation" aria-label="Main Navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/booking">Reservations</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;