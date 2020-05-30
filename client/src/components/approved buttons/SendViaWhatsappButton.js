import React from 'react';
import logo from '../../images/whatsapp.jpg';
import {  WhatsappShareButton,WhatsappIcon} from "react-share";


const SendViaWhatsapButton = ({url}) => {
    const [link,setLink] = React.useState('not really worked')
    return(
        <div className="container-inCenter">
            <WhatsappShareButton className="container-approved" url={`https://briut.robins.app/approval/${url}`}>
                <img src={logo} style={{width:"35px"}}/>
                <button className="button-Approved">
                    שליחה למדריך/ה ב-Whatsapp
                </button>
            </WhatsappShareButton>
            <div onClick={()=>{
                window.print()
            }} className="container-approved">
                
            </div>
        </div>
    )
};

export default SendViaWhatsapButton;