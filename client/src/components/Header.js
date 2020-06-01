import React from 'react';
import logo from '../images/Zofim-logo.png';
console.log(window.location)

const Header = () => (
    <div className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="header-textBox">
            <h1>הצהרת בריאות יומית</h1>
            <h3>תנועת הצופים העבריים בישראל</h3>
        </div>
    </div>
);

export default Header;