import React from 'react';
import {Link} from 'react-router-dom';
import {IoMdArrowDropdown} from 'react-icons/io';
import {MdNavigateNext} from 'react-icons/md';
import _ from 'lodash';
import {tribes } from './resources'

export default class ChildrenDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shvatim :tribes,
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
            errors: {},
            data: {nameOfChild: "", IDNumber: "", hanaga: "", shevet: "", age: "", madrich: ""}
        };
    }
    componentDidMount = () => {
      let hanagaArrey = [];
      this.state.shvatim.map((resulte) => 
        {
          if(!hanagaArrey.includes(resulte.hanaga)){

            hanagaArrey.push(resulte.hanaga); 
          }
        })
        // console.log(hanagaArrey)
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
        // if(this.state.nameOfMadrich.split(" ").length < 2 ) {
        //   errors.madrich = true
        // }
        if(_.isEmpty(errors)){
          let data = {
              nameOfChild: this.state.nameOfChild,
              IDNumber: this.state.IDNumber,
              hanaga: this.state.hanagaSearchRes,
              shevet: this.state.shevetSearchRes,
              age: this.state.age,
              // madrich: this.state.nameOfMadrich 
          }
          // this.setState({
          //   data: {
          //     nameOfChild: this.state.nameOfChild,
          //     IDNumber: this.state.IDNumber,
          //     hanaga: this.state.hanagaSearchRes,
          //     shevet: this.state.shevetSearchRes,
          //     age: this.state.age,
          //     madrich: this.state.nameOfMadrich 
          //   }
          // })
          this.props.setChild(data)
          this.props.setStep(1)
        }
        this.setState({ errors })
      }

    render(){
        return (
            <div className="container-center">

                <Link to="/"><button className="back-button"> <MdNavigateNext /> אחורה</button></Link>
                <div className="text-sub-title">פרטי החניך/ה</div>

                <div className="formcontainer">
                <div className="text-paragraph-right">* שם החניך/ה</div>
                <input 
                    style={{border: (this.state.errors.child ? "#EB5757 1.5px solid" : "")}}
                    type="text"
                    value={this.state.nameOfChild}
                    onChange={(e) => {this.onNameChange(e.target.value)}}
                    placeholder="השם המלא של בנך/בתך"
                    onFocus={() => {if(this.state.errors.child) {delete this.state.errors.child }}}
                    
                />
                {this.state.errors.child && <div className="error-container">יש להזין את השם המלא של החניך/ה</div>}
                </div>
                <div className="formcontainer">
                <div className="text-paragraph-right">* מספר ת.ז</div>
                <input 
                    style={{border: (this.state.errors.Id ? "#EB5757 1.5px solid" : "")}}
                    type="text"
                    value={this.state.IDNumber}
                    onChange={(e) => {this.onIDNumberChange(e.target.value)}}
                    placeholder="9 ספרות, נאסף לצורך זיהוי החניך/ה"
                    onFocus={() => {if(this.state.errors.Id) {delete this.state.errors.Id }}}
                />
                {this.state.errors.Id && <div className="error-container">מספר תעודת הזהות שהזנת לא תקין</div>}
                </div>
                <div className="formcontainer">
                <div className="text-paragraph-right">* הנהגה</div>
                <label className="container-input"
                  style={{border: (this.state.errors.hanaga ? "#EB5757 1.5px solid" : "")}}
                >
                  <input 
                      type="text"
                      style={{width:"90%"}}
                      placeholder="בחר/י את ההנהגה"
                      onChange={(e) => { this.searchHanga(e.target.value); }}
                      onFocus={() => {this.setState({ showHanaga: true }); if(this.state.errors.hanaga) {delete this.state.errors.hanaga };}}
                      onBlur={() => {
                        setTimeout(() => {
                          this.setState({ showHanaga: false })
                        }, 300)
                      }}
                      value={this.state.hanagaSearchRes}
                  />
                  <IoMdArrowDropdown />

                </label>
                {this.state.errors.hanaga && <div className="error-container">יש לבחור הנהגה</div>}
                {this.state.showHanaga && <ul>
                {this.state.searchResultesHanaga.map((resulte,i ) => 
                  <li 
                  key={i} 
                  onClick={(e) => { 
                    // console.log("ss");  
                    console.log(this.state.shvatim,resulte)
                    let shvatim = _.filter(this.state.shvatim,function(o){return o.hanaga == resulte})           
                    
                    let x = []
                    shvatim.map((z)=>{
                      x.push(z.shevet)
                    })
                    this.setState({ 
                      isHanagaSelcted: true,
                      hanagaSearchRes: resulte,
                      searchResultesHanaga: [],
                      shvatimArrey:x,
                      searchResultesShvatim:x,
                      shevetSearchRes:''
                    })
                  }}
                  >
                  {resulte}
                  </li>  
               )}   
              </ul>
                }

              

              </div>
              <div className="formcontainer">
                
              <div className="text-paragraph-right">* שבט</div>
              <div className="container-input" 
                style={{background: (this.state.isHanagaSelcted ? "none" : "#E0E0E0"), 
                  border: (this.state.errors.shevet ? "#EB5757 1.5px solid" : "")}}
              >
                <input 
                    style={{width:"90%"}}
                    type="text"
                    placeholder="בחר/י את השבט"
                    disabled={!this.state.isHanagaSelcted}
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
              </div>
              <div className="formcontainer">
                
              <div className="text-paragraph-right">* שכבה</div>
              <div className="container-input"
                style={{border: (this.state.errors.age ? "#EB5757 1.5px solid" : "")}}
              >
                <input 
                    type="text"
                    style={{width:"90%"}}
                    placeholder="בחר/י את  השכבה"
                    onChange={(e) => { this.chooseAge(e.target.value); }}
                    onFocus={() => {
                      console.log(this.state.ageArrey)
                      if(this.state.errors.age){
                        let a = {...this.state.errors}
                        delete a.age
                        this.setState({
                          showAge:true,
                          errors:a
                        })
                      }
                      // this.setState({ showAge: true }); 
                      // if(this.state.errors.age) 
                      // {delete this.state.errors.age }}}
                      else{
                        this.setState({
                          showAge:true
                        })
                      }
                    }}
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
                        age: resulte
                        // ageArrey: [] 
                      })
                      }}
                  >
                  {resulte}
                  </li>)}   
              </ul>
              }
              </div><div className="formcontainer">
                
                <div className="text-paragraph-right">* שם המדריך</div>
                <input 
                    style={{border: (this.state.errors.madrich ? "#EB5757 1.5px solid" : "")}}
                    type="text"
                    onChange={(e) => {this.setState({ nameOfMadrich: e.target.value })}}
                    placeholder="השם המלא"
                    onFocus={() => {if(this.state.errors.madrich) {delete this.state.errors.madrich }}}
                />
                {this.state.errors.madrich && <div className="error-container">יש להזין את שם המדריך/ה</div>}
                </div>
                <div className="formcontainer">
                <button 
                  className="login-button"
                  // disabled={!(this.state.nameOfChild !== "" &&
                  //   this.state.IDNumber !== "" &&
                  //   this.state.isHanagaSelcted &&
                  //   this.state.isShevetSelcted &&
                  //   this.state.isAgeSelcted &&
                  //   this.state.nameOfMadrich !== ""
                  // )}
                  onClick={() => {this.lookForErrors() }}
                >
                  מילוי הצהרת בריאות
                </button>
                </div>
            </div>
        )
    }

}