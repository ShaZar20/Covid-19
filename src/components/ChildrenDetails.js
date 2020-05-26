import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import {MdNavigateNext} from 'react-icons/md';

export default class ChildrenDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shvatim: [{name: "בזק", hanaga: "שרון דרום"}, {name:"אופק", hanaga: "שרון צפון"}],
            hanagaSearchRes: "",
            showHanaga: false,
            hanagaArrey: [],
            searchResultesHanaga: [],
            isHanagaSelcted: false,
            shevetSearchRes: "",
            shvatimArrey: ["בזק", "אופק"],
            searchResultesShvatim: ["בזק", "אופק"],
            showShvatim: false,
            age: "",
            showAge: false,
            ageArrey: ["ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב"],
            isAgeSelcted: false,
            nameOfMadrich: "",
            isShevetSelcted: false,
            nameOfChild: "",
            IDNumber: "",
            errors: {}
        };
    }
    componentDidMount = () => {
      let hanagaArrey = [];
      this.state.shvatim.map((resulte) => 
        {
         hanagaArrey.push(resulte.hanaga); 
        })
        console.log(hanagaArrey)
      this.setState({ hanagaArrey: hanagaArrey, searchResultesHanaga: hanagaArrey })
    };

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
      console.log(text);
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

      onNameChange = (text = "") => {
        this.setState({nameOfChild: text})
      }

      onIDNumberChange = (text = "") => {
        this.setState({IDNumber: text})
      }

      lookForErrors = () => {
        let errors = {};
        if(this.state.nameOfChild.split(" ").length < 2 ) {
          errors.child = true
        }
        if(this.state.IDNumber.length != 9 ) {
          errors.Id = true
        }
        if(!this.state.hanagaArrey.includes(this.state.hanagaSearchRes)) {
          errors.hanaga = true
        }
        if(!this.state.shvatimArrey.includes(this.state.shevetSearchRes)){
          errors.shevet = true
        }
        if(this.state.age == "") {
          errors.age = true
        }
        if(this.state.nameOfMadrich.split(" ").length < 2 ) {
          errors.madrich = true
        }
        this.setState({ errors })
      }

    render(){
        return (
            <div className="container-center">

                <button className="back-button"> <MdNavigateNext /> אחורה</button>
                <div className="text-sub-title">פרטי החניך/ה</div>

                <div className="text-paragraph-right">* שם החניך/ה</div>
                <input 
                    style={{border: (this.state.errors.child ? "#EB5757 1.5px solid" : "")}}
                    type="text"
                    value={this.state.nameOfChild}
                    onChange={(e) => {this.onNameChange(e.target.value)}}
                    placeholder="השם המלא של בנך/בתך"
                />

                <div className="text-paragraph-right">* מספר ת.ז</div>
                <input 
                    type="text"
                    value={this.state.IDNumber}
                    onChange={(e) => {this.onIDNumberChange(e.target.value)}}
                    placeholder="9 ספרות, נאסף לצורך זיהוי החניך/ה"
                />

                <div className="text-paragraph-right">* הנהגה</div>
                <div className="container-input">
                  <input 
                      type="text"
                      placeholder="בחר/י את ההנהגה"
                      onChange={(e) => { this.searchHanga(e.target.value); }}
                      onFocus={() => this.setState({ showHanaga: true })}
                      onBlur={() => {
                        setTimeout(() => {
                          this.setState({ showHanaga: false })
                        }, 100)
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
                      searchResultesHanaga: [] 
                    })
                  }}
                  >
                  {resulte}
                  </li>  
               )}   
              </ul>
                }

              <div className="text-paragraph-right">* שבט</div>
              <div className="container-input" style={{background: (this.state.isHanagaSelcted ? "none" : "#E0E0E0")}}>
                <input 
                    type="text"
                    placeholder="בחר/י את השבט"
                    disabled={!this.state.isHanagaSelcted}
                    onChange={(e) => { this.searchShevet(e.target.value); }}
                    onFocus={() => this.setState({ showShvatim: true })}
                      onBlur={() => {
                        setTimeout(() => {
                          this.setState({ showShvatim: false })
                        }, 100)
                      }}
                    value={this.state.shevetSearchRes}
                />
                <IoMdArrowDropdown />
              </div>
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
              <div className="container-input">
                <input 
                    type="text"
                    placeholder="בחר/י את  השכבה"
                    onChange={(e) => { this.chooseAge(e.target.value); }}
                    onFocus={() => this.setState({ showAge: true })}
                    onBlur={() => {
                      setTimeout(() => {
                        this.setState({ showAge: false })
                      },100)
                    }}
                    value={this.state.age}
                />
                <IoMdArrowDropdown />
              </div>
              {this.state.showAge && <ul >
                {this.state.ageArrey.map((resulte,i ) => 
                  <li 
                    key={i} 
                    onClick={(e) => {              
                      this.setState({ 
                        isAgeSelcted: true,
                        age: resulte,
                        ageArrey: [] 
                      })
                      }}
                  >
                  {resulte}
                  </li>)}   
              </ul>
              }
                <div className="text-paragraph-right">* שם המדריך</div>
                <input 
                    type="text"
                    onChange={(e) => {this.setState({ nameOfMadrich: e.target.value })}}
                    placeholder="השם המלא"
                />

                <button 
                  className="login-button"
                  disabled={!(this.state.nameOfChild !== "" &&
                    this.state.IDNumber !== "" &&
                    this.state.isHanagaSelcted &&
                    this.state.isShevetSelcted &&
                    this.state.isAgeSelcted &&
                    this.state.nameOfMadrich !== ""
                  )}
                  onClick={() => this.lookForErrors()}
                >
                  מילוי הצהרת בריאות
                </button>
           
            </div>
        )
    }

}