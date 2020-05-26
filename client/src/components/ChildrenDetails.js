import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';

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
            searchResultesShvatim: [],
            age: "",
            showAge: false,
            ageArrey: ["ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב"],
            isAgeSelcted: false,
            nameOfMadrich: "",
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
        if (text === "") {
          return this.setState({ 
            searchResultesShvatim: [],
            shvatimSearchRes: ""
          })
        }
        const resultes = [...this.state.shvatim.filter(shevet => shevet.name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
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

    
    render(){
        return (
            <div className="container-center">

                <button className="back-button"> &lt; אחורה</button>
                <div className="text-sub-title">פרטי החניך/ה</div>

                <div className="text-paragraph-right">* שם החניך/ה</div>
                <input 
                    type="text"
                    //value={}
                    onChange={this.onNameChange}
                    placeholder="השם המלא של בנך/בתך"
                />

                <div className="text-paragraph-right">* מספר ת.ז</div>
                <input 
                    type="text"
                    //value={}
                    onChange={this.onIDNumberChange}
                    placeholder="9 ספרות, נאסף לצורך זיהוי החניך/ה"
                />

                <div className="text-paragraph-right">* הנהגה</div>
                <div className="container-input">
                  <input 
                      type="text"
                      placeholder="בחר/י את ההנהגה"
                      onChange={(e) => { this.searchHanga(e.target.value); }}
                      onFocus={() => this.setState({ showHanaga: true })}
                      onBlur={() => this.setState({ showHanaga: false })}
                      value={this.state.hanagaSearchRes}
                  />
                  <IoMdArrowDropdown />

                </div>
                {this.state.showHanaga && <ul>
                {this.state.searchResultesHanaga.map((resulte,i ) => 
                  <li 
                  key={i} 
                  onClick={() => {              
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
              <div className="container-input">
                <input 
                    type="text"
                    placeholder="בחר/י את השבט"
                    disabled={!this.state.isHanagaSelcted}
                    onChange={(e) => { this.searchShevet(e.target.value); }}
                    value={this.state.shevetSearchRes}
                />
                <IoMdArrowDropdown />
              </div>
                <ul>
                {this.state.searchResultesShvatim.map((resulte,i ) => 
                  <li 
                    key={i} 
                    onClick={(e) => {              
                      this.setState({ 
                        shevetSearchRes: resulte.name,
                        searchResultesShvatim: [] 
                      })
                      }}
                  >
                  {resulte.name}
                  </li>)}   
              </ul>
              

              <div className="text-paragraph-right">* שכבה</div>
              <div className="container-input">
                <input 
                    type="text"
                    placeholder="בחר/י את  השכבה"
                    onChange={(e) => { this.chooseAge(e.target.value); }}
                    onFocus={() => this.setState({ showAge: true })}
                    onBlur={() => this.setState({ showAge: false })}
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

                <button className="login-button">מילוי הצהרת בריאות</button>
           
            </div>
        )
    }

}