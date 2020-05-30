import React from 'react';
import {MdNavigateNext} from 'react-icons/md';
import {IoMdArrowDropdown} from 'react-icons/io';
import _ from 'lodash';

export default class DownloadReport extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDate: false,
            date:"",
            isDateSelcted: false,
            searchResultesHanaga: [],
            hanagaArrey: [],
            hanagaSearchRes: "",
            showHanaga: false,
            isHanagaSelcted: false,
            showShvatim: false,
            isShevetSelcted: false,
            shevetSearchRes: "",
            searchResultesShvatim: [], 
            shvatimArrey: ["בזק", "אופק"],
            isAgeSelcted: true,
            age: "",
            showAge: false,
            ageArrey: ["ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב"],

            errors: {download: false}
        };
    }

        searchHanga = (text = "" ) =>  {
            if (text === "") {
              return this.setState({ 
                searchResultesHanaga: this.state.hanagaArrey,
                hanagaSearchRes: ""
              })
            }
            const resultes = [...this.state.hanagaArrey.filter(name => name.trim().indexOf(text.trim()) !== -1)];
            this.setState({
              searchResultesHanaga: resultes,
              hanagaSearchRes: text
              })
          };

          searchShevet = (text = "" ) =>  {
              if (text === "") {
                return this.setState({ 
                  searchResultesShvatim: this.state.shvatimArrey,
                  shevetSearchRes: ""
                })
              }
              const resultes = [...this.state.shvatimArrey.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
              this.setState({
                searchResultesShvatim: resultes,
                shevetSearchRes: text
                })
            };
          
            chooseAge = (text = "" ) =>  {
              if (text === "") {
                return this.setState({ 
                  ageArrey: [],
                  age: ""
                })
              }
              this.setState({
                age: text
              })
            }

            lookForErrors = () => {
                let errors = {};
                if(this.statedate == ""){
                    errors.date=true
                }
                if(this.state.hanagaSearchRes == ""){
                    errors.hanaga=true
                }
                if(this.state.shevetSearchRes == ""){
                    errors.shevet=true
                }
                if(this.state.age == ""){
                    errors.age=true
                }
                if(_.isEmpty(errors)){
                    errors.download=true
                } else {errors.download=false}
                this.setState({ errors })
            }

    render(){
        return(
            <div className="container-center">
                <button className="back-button"> <MdNavigateNext /> עמוד הבית</button>

                <div className="text-sub-title">הפקת דוח הצהרות יומי</div>
                
                <div className="text-paragraph-right">* תאריך</div>
                    <div className="container-input" >
                    <input 
                        type="text"
                        placeholder="היום"
                        onChange={(e) => {}}
                        onFocus={() => {this.setState({ showDate: true }); if(this.state.errors.hanaga) {delete this.state.errors.hanaga }}}
                        onBlur={() => {
                            setTimeout(() => {
                            this.setState({ showDate: false })
                            }, 300)
                        }}
                        value={this.state.date}
                    />
                    <IoMdArrowDropdown />

                    </div>
                    {this.state.showDate && <ul>
                    {this.state.searchResultesHanaga.map((resulte,i ) => 
                    <li 
                        key={i} 
                        onClick={(e) => {              
                            this.setState({ 
                            isDateSelcted: true,
                            date: resulte,
                            showDate: false
                            })
                        }}
                    >
                    {resulte}
                    </li>  
                    )}   
                    </ul>}

                    <div className="text-paragraph-right">* הנהגה</div>
                    <div className="container-input" 
                        style={{border: (this.state.errors.hanaga ? "#EB5757 1.5px solid" : "")}}
                    >
                        <input 
                            type="text"
                            placeholder=""
                            onChange={(e) => {this.searchHanga(e.target.value); }}
                            onFocus={() => {this.setState({ showHanaga: true }); if(this.state.errors.hanaga) {delete this.state.errors.hanaga }}}
                            onBlur={() => {
                                setTimeout(() => {
                                this.setState({ showHanaga: false })
                                }, 300)
                            }}
                            value={this.state.hanagaSearchRes}
                        />
                        <IoMdArrowDropdown />
                    </div>
                    {this.state.showHanaga && <ul>
                    {this.state.searchResultesHanaga.map((resulte,i ) => 
                    <li 
                        key={i} 
                        onClick={(e) => {              
                            this.setState({ 
                                isHanagaSelcted: true,
                                hanagaSearchRes: resulte,
                                showHanaga: false
                            })
                        }}
                    >
                    {resulte}
                    </li>  
                    )}   
                    </ul>}

                    <div className="text-paragraph-right">* שבט</div>
                    <div className="container-input" 
                        //style={{background: (this.state.isHanagaSelcted ? "none" : "#E0E0E0"), 
                        //border: (this.state.errors.shevet ? "#EB5757 1.5px solid" : "")}}
                    >
                        <input 
                            type="text"
                            placeholder="כל השבטים"
                            onChange={(e) => { this.searchShevet(e.target.value); }}
                            onFocus={() => {this.setState({ showShvatim: true }); if(this.state.errors.shevet) {delete this.state.errors.shevet }}}
                            onBlur={() => {
                                setTimeout(() => {
                                    this.setState({ showShvatim: false })
                                }, 300)
                            }}
                            value={this.state.shevetSearchRes}
                        />
                        <IoMdArrowDropdown />
                    </div>
                    {this.state.errors.shevet && <div className="error-container">יש לבחור שבט</div>}
                    {this.state.showShvatim && <ul>
                    {this.state.searchResultesShvatim.map((resulte,i ) => 
                    <li 
                        key={i} 
                        onClick={(e) => {              
                        this.setState({ 
                            isShevetSelcted: true,
                            shevetSearchRes: resulte,
                            searchResultesShvatim: [] 
                        })
                        }}
                    >     
                    {resulte}
                    </li>)}   
                    </ul>}

                    <div className="text-paragraph-right">* שכבה</div>
                    <div className="container-input"
                        style={{border: (this.state.errors.age ? "#EB5757 1.5px solid" : "")}}
                    >
                        <input 
                            type="text"
                            placeholder="כל השכבות"
                            onChange={(e) => { this.chooseAge(e.target.value); }}
                            onFocus={() => {this.setState({ showAge: true }); if(this.state.errors.age) {delete this.state.errors.child }}}
                            onBlur={() => {
                            setTimeout(() => {
                                this.setState({ showAge: false })
                            },300)
                            }}
                            value={this.state.age}
                        />
                        <IoMdArrowDropdown />
                    </div>
                    {this.state.errors.age && <div className="error-container">יש לבחור שכבה</div>}
                    {this.state.showAge && <ul >
                        {this.state.ageArrey.map((resulte,i ) => 
                        <li 
                            key={i} 
                            onClick={(e) => {              
                            this.setState({ 
                                isAgeSelcted: true,
                                age: resulte,
                                showAge: false
                            })
                            }}
                        >
                        {resulte}
                        </li>)}   
                    </ul>}
                    
                    <button 
                        className="login-button"
                        disabled={!(this.state.isDateSelcted &&
                            this.state.IDNumber !== "" &&
                            this.state.isHanagaSelcted &&
                            this.state.isShevetSelcted &&
                            this.state.isAgeSelcted 
                        )}
                        onClick={() => this.lookForErrors()}
                    >
                     הורדת הדוח באקסל
                    </button>
                    {this.state.errors.download && <div>הורדת הדוח מתבצעת</div>}
            </div>

        )
    }
}

