import React from 'react';
import {FiCheck} from 'react-icons/fi';
import moment from 'moment';
import SendViaWhatsappButton from './approved buttons/SendViaWhatsappButton';
import DownloadButton from './approved buttons/DownloadButton';
import html2canvas from 'html2canvas';
import logo from '../images/Zofim-logo.png';
import styled from 'styled-components'


const LabelI = styled.label`
    margin:0 2px;
`

const Label = ({text}) => {
    return (
        <LabelI>
            {text}
        </LabelI>
    )
}

const Approved = ({name,setChild,setParent,setStep}) => {
    const date = moment()
    let fullname = name.split(" ")
    return (
        <div className="container-center">
                <div className="text-title"> אישור השתתפות בפעילות - {NamedNodeMap}</div>
                <div className="text-paragraph">ההצהרה נשלחה בהצלחה וניתן להשתתף בפעילות!</div>
                
                <FiCheck className="icon-check" />
                <div>{date.format("LLLL")}</div>
                <div className="spacer-column" />
                <SendViaWhatsappButton />
                <DownloadButton />
                <div className="spacer-column" />
                <div className="text-paragraph">ניפגש בשבט,</div>
                <div className="text-paragraph">חזק ואמץ!</div>
                <div className="spacer-column" />

                <button className="low-button" onClick={()=>{
                    setStep(0)
                    setParent({})
                    setChild({})
                }}>מילוי הצהרה נוספת</button>
                <div style={{opacity:"0"}}>
                    <div style={{width:"100%"}} id="shareable" className="container-center">
                        <img style={{position:"unset"}} src={logo} alt="Logo" className="logo"/>
                        <div className="text-title">
                        {/* אישור השתתפות בפעילות */}
                        <Label text={"אישור"}/>
                        <Label text={"השתתפות"}/>
                        <Label text={"בפעילות"}/>
                        </div>
                        <div style={{fontSize:"18px",margin:"10px 0"}}>
                            <Label text={fullname[0]}/>
                            <Label text={fullname[1]}/>
                        </div>
                        <div >
                            <Label text={date.format("DD/MM/YYYY")}/>
                            <Label text={date.format("HH:mm")}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Approved