import React from 'react';
import logo from '../../images/whatsapp.jpg';


const SendViaWhatsapButton = () => (
    <div className="container-inCenter">
        <div className="container-approved">
            <img src={logo} style={{width:"35px"}}/>
            <button className="button-Approved">
                שליחה למדריך/ה ב-Whatsapp
            </button>
        </div>
    </div>
);

export default SendViaWhatsapButton;