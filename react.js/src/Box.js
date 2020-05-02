import React from 'react';
import './css/Style.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
function Box() {
    return (
        <div id="box">
           <Header/>
           <Content />
           <Footer/>
        </div>
    );
}

export default Box;
