import React from 'react';
import {FiCheck} from 'react-icons/fi';
import moment from 'moment';

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
                <div>{this.state.date.format("DD/MM/YYYY")}</div>
                <div className="spacer-column" />
                <div className="text-paragraph">ניפגש בשבט,</div>
                <div className="text-paragraph">חזק ואמץ!</div>
                <div className="spacer-column" />

                <div className="text-paragraph">שליחה דרך ה- Whatsapp:</div>

                <button className="low-button">מילוי הצהרה נוספת</button>

            </div>
        )
    }
}
