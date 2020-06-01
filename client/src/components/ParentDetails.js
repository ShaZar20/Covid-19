import React from 'react';
import {MdNavigateNext} from 'react-icons/md';
import {FiCheck} from 'react-icons/fi';
import _ from 'lodash';

export default class ParentDetails extends React.Component {
    constructor(prop){
        super(prop);

        this.state={
            errors: {},
            chBox1: false,
            chBox2: false,
            chBox3: false,
            chBox4: false,
            parentName: "",
            IDNumber: "",
            data:{nameOfParent:"", IDNumber: ""}
        };
    }

    lookForErrors = () => {
        let errors = {};
        if(!this.state.chBox1){
            errors.chBox1 = true
        }
        if(!this.state.chBox2){
            errors.chBox2 = true
        }
        if(!this.state.chBox3){
            errors.chBox3 = true
        }
        if(!this.state.chBox4){
            errors.chBox4 = true
        }
        if(this.state.parentName.split(" ").length < 2 ) {
            errors.parentName = true
        }
        if(this.state.IDNumber.length != 9 ) {
            errors.Id = true
        }
        this.setState({ errors })
        if(_.isEmpty(errors)){
            // this.setState({
            //   data: {
            //     nameOfParent: this.state.parentName,
            //     IDNumber: this.state.IDNumber,
            //   }
            // })
            let data = {
                nameOfParent: this.state.parentName,
                IDNumber: this.state.IDNumber
            }
            // this.props.setParent(data)
            // console.log("boom")
            this.props.submit(data)
          }
    }

    onNameChange = (text = "") => {
        this.setState({parentName: text})
    }

    onIDNumberChange = (text = "") => {
        this.setState({IDNumber: text})
      }
      
    render(){
        return(
            <div>
                <button className="back-button" onClick={()=>this.props.setStep(0)}> <MdNavigateNext /> אחורה</button>

                <div className="container-center-right">
                    <div className="text-sub-title">הצהרת ההורה</div>
                    <div className="text-paragraph-right">אני מצהיר/ה כדלהלן:</div>
                    <label className="container-checkbox">
                        <input
                            style={{border: (this.state.errors.chBox1 ? "#EB5757 1.5px solid" : "")}}
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB1" 
                            name="bodyTemp" 
                            onChange={(e) => {
                                let aller = this.state.errors
                                if(this.state.chBox1){
                                    aller.chBox1 = true
                                    this.setState({
                                        chBox1: !this.state.chBox1,
                                        errors:aller
                                    })
                                }else{
                                    this.setState({
                                        chBox1: !this.state.chBox1
                                    })
                                }
                                
                                }}
                            onFocus={() => {if(this.state.errors.chBox1) {delete this.state.errors.chBox1 }}}
                            />
                            <span className="checkmark"></span>
                        <div className="text-paragraph-right-bold">מדדתי חום לבני/בתי ונמצא כי חום גופו/ה מתחת ל-38.0 מעלות צלזיוס</div>
                    </label>
                    {this.state.errors.chBox1 && <div className="error-container">יש לסמן את תיבת הבחירה</div>}
                    <div className="container-checkbox">

                        <input
                            style={{border: (this.state.errors.chBox2 ? "#EB5757 1.5px solid" : "")}}
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB2" 
                            name="coughing" 
                            onChange={(e) => {
                                let aller = this.state.errors
                                if(this.state.chBox2){
                                    aller.chBox2 = true
                                    this.setState({
                                        chBox2: !this.state.chBox2,
                                        errors:aller
                                    })
                                }else{
                                    this.setState({
                                        chBox2: !this.state.chBox2
                                    })
                                }
                            }}
                            onFocus={() => {if(this.state.errors.chBox2) {delete this.state.errors.chBox2 }}}
                            />
                        <div className="text-paragraph-right-bold">בני/בתי לא משתעל/ת ואין לו/לה קשיי נשימה</div>
                    </div>
                    <div className="text-note">* למעט שיעול או קושי בנשימה הנובע ממצב כרוני כגון אסטמה או אלרגיה אחרת.</div>
                    {this.state.errors.chBox2 && <div className="error-container">יש לסמן את תיבת הבחירה</div>}
                    <div className="container-checkbox">
                        <input
                            style={{border: (this.state.errors.chBox3 ? "#EB5757 1.5px solid" : "")}}
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB3" 
                            name="metCovid" 
                            onChange={(e) => {
                                let aller = this.state.errors
                                if(this.state.chBox3){
                                    aller.chBox3 = true
                                    this.setState({
                                        chBox3: !this.state.chBox3,
                                        errors:aller
                                    })
                                }else{
                                    this.setState({
                                        chBox3: !this.state.chBox3
                                    })
                                }
                            }}
                            onFocus={() => {if(this.state.errors.chBox3) {delete this.state.errors.chBox3 }}}
                            />
                        <div className="text-paragraph-right-bold">למיטב ידיעתי בני/בתי לא היה/הייתה במגע קרוב עם חולה קורונה בשבועיים האחרונים</div>
                    </div>
                    {this.state.errors.chBox3 && <div className="error-container">יש לסמן את תיבת הבחירה</div>}
                </div>

                <div className="container-center">
                    <div className="formcontainer">

                    <div className="text-paragraph-right">*שם ההורה</div>
                    <input 
                        style={{border: (this.state.errors.parentName ? "#EB5757 1.5px solid" : "")}}
                        type="text"
                        value={this.state.parentName}
                        placeholder="השם המלא שלך"
                        onChange={(e) => {this.onNameChange(e.target.value)}}
                        onFocus={() => {if(this.state.errors.parentName) {delete this.state.errors.parentName }}}
                    />
                    {this.state.errors.parentName && <div className="error-container">יש להזין את שמך המלא</div>}
                    </div>
                    <div className="formcontainer">

                    <div className="text-paragraph-right">*מספר ת.ז</div>
                    <input 
                        style={{border: (this.state.errors.Id ? "#EB5757 1.5px solid" : "")}}
                        type="text"
                        value={this.state.IDNumber}
                        onChange={(e) => {this.onIDNumberChange(e.target.value)}}
                        placeholder="נאסף לצורך זיהוי החותם"
                        onFocus={() => {if(this.state.errors.Id) {delete this.state.errors.Id }}}
                    />
                    {this.state.errors.Id && <div className="error-container">מספר תעודת הזהות שהזנת לא תקין</div>}
                    </div>
                </div>
                <div className="container-center">
                    <div className="container-checkbox">

                        <input 
                            style={{border: (this.state.errors.chBox4 ? "#EB5757 1.5px solid" : "")}}
                            className="input-checkbox" 
                            type="checkbox" 
                            id="chB4" 
                            name="confirm" 
                            onChange={(e) => {
                                let aller = this.state.errors
                                if(this.state.chBox4){
                                    aller.chBox4 = true
                                    this.setState({
                                        chBox4: !this.state.chBox4,
                                        errors:aller
                                    })
                                }else{
                                    this.setState({
                                        chBox4: !this.state.chBox4
                                    })
                                }
                            }}
                            onFocus={() => {if(this.state.errors.chBox4) {delete this.state.errors.chBox4 }}}
                            />
                        <div className="text-paragraph-right-bold">אני מאשר/ת כי הפרטים שהצהרתי נכונים</div>
                    </div>
                    {this.state.errors.chBox4 && <div className="error-container">יש לסמן את תיבת הבחירה</div>}

                    <button 
                        className="login-button"
                        onClick={() => this.lookForErrors()}
                        // disabled={ !(this.state.chBox1 &&
                        //     this.state.chBox2 &&
                        //     this.state.chBox3 &&
                        //     this.state.chBox4 
                        // )}
                    >
                        סיום ושליחה
                    </button>
                </div>
            </div>
        )
    }
}