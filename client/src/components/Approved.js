import React from 'react';
import {FiCheck} from 'react-icons/fi';
import moment from 'moment';
import SendViaWhatsappButton from './approved buttons/SendViaWhatsappButton';
import DownloadButton from './approved buttons/DownloadButton';

export default class Approved extends React.Component {
    constructor(prop){
        super(prop);

        this.state={
            date: moment(),
        };
    }

    componentDidMount() {
        
      }

    render(){
        return(
            <div className="container-center">
                <div className="text-title">אישור השתתפות בפעילות</div>
                <div className="text-paragraph">ההצהרה נשלחה בהצלחה וניתן להשתתף בפעילות!</div>
                
                <FiCheck className="icon-check" />
                <div>{this.state.date.format("LLLL")}</div>
                <div className="spacer-column" />
                <SendViaWhatsappButton />
                <DownloadButton />
                <div className="spacer-column" />
                <div className="text-paragraph">ניפגש בשבט,</div>
                <div className="text-paragraph">חזק ואמץ!</div>
                <div className="spacer-column" />

                <button className="low-button">מילוי הצהרה נוספת</button>

            </div>
        )
    }
}
