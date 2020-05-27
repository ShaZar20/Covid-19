import React from 'react';
import logo from '../../images/Zofim-logo.png';

const Loading = () => (
    <div className="backdrop">
        <h1>ההתחברות מתבצעת</h1>
        <img src={logo} alt="Logo" />
    </div>
);

export default Loading;