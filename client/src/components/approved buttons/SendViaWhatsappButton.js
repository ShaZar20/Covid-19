import React from 'react';
import logo from '../../images/whatsapp.jpg';

const SendViaWhatsapButton = () => {
    const [link,setLink] = React.useState('not really worked')
    return(
        <div className="container-inCenter">
            <div onClick={()=>{
window.print()
            }} className="container-approved">
                <img src={logo} style={{width:"35px"}}/>
                <button className="button-Approved">
                    שליחה למדריך/ה ב-Whatsapp
                </button>
            </div>
        </div>
    )
};

export default SendViaWhatsapButton;