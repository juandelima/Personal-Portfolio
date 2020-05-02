import React from 'react';
import './css/Style.css';
function Footer() {
    return (
        <footer>
           <div className="social-media">
               <p>
                  Follow me on
               </p>
               <div className="icon-sm">
                    <a href="https://www.facebook.com/juan.valerian.7/" className="link-fb"></a>
                    <a href="https://www.instagram.com/juanvaleriand/" className="link-ig"></a>
                    <a href="https://github.com/juandelima" className="link-github"></a>
               </div>
           </div>
        </footer>
    );
}

export default Footer;
