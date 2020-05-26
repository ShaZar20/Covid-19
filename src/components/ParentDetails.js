import React from 'react';
import {MdNavigateNext} from 'react-icons/md';

export default class ParentDetails extends React.Component {
    constructor(prop){
        super(prop);

        this.state={

        };
    }
    
      
    render(){
        return(
            <div>
                <button className="back-button"> <MdNavigateNext /> אחורה</button>

                <div className="container-center-right">
                    <div className="text-sub-title">הצהרת ההורה</div>
                    <div className="text-paragraph-right">אני מצהיר/ה כדלהלן:</div>
                    <div className="container-checkbox">
                        <input
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB1" 
                            name="bodyTemp" 
                            /*checked={this.state.checkStatus[0]} onChange={(e) => {this.onChange(1, this.prevState)}} */
                        />
                        <div className="text-paragraph-right-bold">מדדתי חום לבני/בתי ונמצא כי חום גופו/ה מתחת ל-38.0 מעלות צלזיוס</div>
                    </div>
                    <div className="container-checkbox">

                        <input
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB2" 
                            name="coughing" 
                            /*checked={this.state.checkStatus[0]} onChange={(e) => {this.onChange(1, this.prevState)}} */
                            />
                        <div className="text-paragraph-right-bold">בני/בתי לא משתעל/ת ואין לו/לה קשיי נשימה</div>
                    </div>
                    <div className="text-note">* למעט שיעול או קושי בנשימה הנובע ממצב כרוני כגון אסטמה או אלרגיה אחרת.</div>
                    <div className="container-checkbox">
                        <input
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB3" 
                            name="metCovid" 
                            /*checked={this.state.checkStatus[0]} onChange={(e) => {this.onChange(1, this.prevState)}} */
                            />
                        <div className="text-paragraph-right-bold">למיטב ידיעתי בני/בתי לא היה/הייתה במגע קרוב עם חולה קורונה בשבועיים האחרונים</div>
                    </div>
                </div>

                <div className="container-center">
                    <div className="text-paragraph-right">*שם ההורה</div>
                    <input 
                        type="text"
                        //value={}
                        //onChange={this.onNameChange}
                        placeholder="השם המלא שלך"
                    />
                    <div className="text-paragraph-right">*מספר ת.ז</div>
                    <input 
                        type="text"
                        //value={}
                        //onChange={this.onNameChange}
                        placeholder="נאסף לצורך זיהוי החותם"
                    />
                    <div className="text-paragraph-right">*כתובת מייל</div>
                    <input 
                        type="text"
                        //value={}
                        //onChange={this.onNameChange}
                        placeholder="המייל שאליו נשלח האישור"
                    />
                </div>
                <div className="container-center">
                    <div className="container-checkbox">

                        <input 
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB4" 
                            name="confirm" 
                            />
                        <div className="text-paragraph-right">אני מאשר/ת כי הפרטים שהצהרתי נכונים</div>
                    </div>

                    <button className="login-button">סיום ושליחה</button>
                </div>
            </div>
        )
    }
}