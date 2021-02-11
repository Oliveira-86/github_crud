import React from 'react';
import  { Link } from 'react-router-dom';
import './styles.scss'

const Navbar = () => (
    <nav className="row bg-primary nav-container">
        <Link to="/" className="nav-text">
            <h4>Bootcamp DevSuperio</h4>    
        </Link> 
    </nav>
);

export default Navbar;