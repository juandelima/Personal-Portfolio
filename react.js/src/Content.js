import React from 'react';
import './css/Style.css';
import Img from './Img.js';
function Content() {
    return (
        <main id="content">
           <div className="text">
                <h2>Hello, I'm Juan</h2>
                <h1>Software<br/>Engineer</h1>
           </div>
            <div className="picture">
                <Img/>
            </div>
        </main>
    );
}

export default Content;
