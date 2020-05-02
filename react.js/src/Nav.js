import React from 'react';
import './css/Style.css';

function Nav() {
    return (
        <nav id="navigation">
            <ul>
                <li><a href="#" className="active_class">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default Nav;