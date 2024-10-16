// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>NextStep</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/support-finder">Support Finder</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li> {/* Dashboard Link */}
            </ul>
        </nav>
    );
};

export default Navbar;
