import React from 'react';
import './css/Style.css';
import Logo from './Logo.js';
import Nav from './Nav.js';
import Contact from './Contact.js';

function Header() {
    return (
        <header id="header">
            <Logo/>
            <Nav/>
            <Contact/>
        </header>
    );
}

export default Header;