import React,{useState,useEffect} from 'react'
import XLSX from 'xlsx'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../../constants'
import moment from 'moment'
import { Multiselect } from 'multiselect-react-dropdown';
import _ from 'lodash'
import {BigUnits,tribes} from '../resources'

const Container = styled.div`
    width: 500px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    h1{
        text-align:center;
    }
    div{
        display:flex;
        flex-direction:column;
        width:100%;
        margin-top:1rem;
        label{
            font-size:18px;
            margin-bottom:5px;
        }
        #closed {
            margin:0;
            padding:1rem;
            background:#E0E0E0;
            font-size:18px;
            border:1px solid black;
            border-radius:6px;
            width:unset;
        }
        button{
            margin-top: 2rem;
            padding: 1rem;
            border: 1px solid white;
            color:white;
            border-radius: 6px;
            background:#2D9CDB;
            font-size:18px;
        }
        #lab{
            text-align:center;
        }
    }
    select{
        display:flex;
        flex-direction:row  !important;
        width:unset !important;
        border: 1px solid black;
        padding: 2px;
        min-height:30px;
        border-radius: 6px;
        outline:none;
        flex-wrap:wrap;
        width:unset  !important;
        margin:0 !important;
        padding:5px;
        font-size:18px;
        /* color:#2F80ED; */
    }

`

const TagCon = styled.div`
    display:flex;
    flex-direction:row  !important;
    width:unset !important;
    border: 1px solid black;
    padding: 2px;
    min-height:30px;
    border-radius: 6px;
    outline:none;
    flex-wrap:wrap;
    div{
        width:unset  !important;
        margin:0 !important;
        padding:5px;
        font-size:18px;
        color:#2F80ED;
    }
`

const Ul = styled.ul`
    max-height:unset;
    border:1px solid black;
    border-radius:0 0 6px 6px;
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    .chosen{

    }
    .unchosen{

    }
`

const Li = styled.li`
    display:flex;
    span{
        cursor:pointer;
        width:10px;
        height:10px;
        border:1px solid #828282;
        background:${props=>props.ch ? "#2F80ED":"transparent"};
        margin:0 1rem;
    }
`

const Permission = (state,tribes,chosenShevet,chosenHanaga,onSelect,onRemove,ChooseHanaga,send,choseAll,removeAll) => {
    // console.log(level)
    switch (state.level){
        case "basic": // מרכז שבט
            return (
                <React.Fragment>
                    <div>
                        <label>הנהגה</label>
                        <div id="closed">{state.bigunit}</div>
                    </div>
                    <div>
                        <label>שבט</label>
                        <div id="closed">{state.unit}</div>
                    </div>
                </React.Fragment>
            )
        case "prem": // צוות הנהגה
        
            let a = _.filter(tribes,function(o){return o.hanaga == state.bigunit})
            return (
                <React.Fragment>
                    <div>
                        <label>הנהגה</label>
                        <div id="closed">{state.bigunit}</div>
                    </div>
                    <div>
                        <label>שבט</label>
                        <MultiSelect 
                        list={a}
                        chosen={chosenShevet}
                        ckey={'shevet'}
                        type="shevet"
                        add={onSelect}
                        remove={onRemove}
                        num={2}
                        emptyphrase={"בחירת שבט"}
                        fullphrase={"כל השבטים"}
                        choseAll={choseAll}
                        removeAll={removeAll}
                        />
                    </div>
                </React.Fragment>
            )    
        case "master": // מטה
            let av = []
            let real =[]
            // console.log("chosen hanaga",chosenHanaga)
            // console.log(send)
            tribes.map((x)=>{
                if(!av.includes(x.hanaga)){
                    av.push(x.hanaga)
                    real.push({id:x.hanaga})
                }
            })
            // let a1 = _.filter(tribes,function(o){return o.hanaga == state.bigunit})
            // console.log(chosenHanaga)
            let valueof = {id:''}
            if(chosenHanaga[0] != ''){
                valueof = chosenHanaga[0]
            }
            console.log(valueof)
            return(
                <React.Fragment>
                    <div>
                        <label>הנהגה</label>
                        <select
                        // style={{color:(chosenHanaga[0]=='' ? "#828282":"#2F80ED")}}
                        // value={valueof.id}
                        onChange={(e)=>{
                            ChooseHanaga({id:e.target.value})
                            // onSelect([],e.target.value,'hanaga')
                        }}
                        >
                            <option value={''}>בחירת הנהגה</option>
                            {real.map((x)=>{
                                return <option value={x.id}>
                                    {x.id}
                                </option>
                            })}
                        </select>
                        
                        {/* <MultiSelect 
                            list={real}
                            chosen={chosenHanaga}
                            ckey={'id'}
                            type="hanaga"
                            add={onSelect}
                            remove={onRemove}
                            num={1}
                            emptyphrase={"בחירת הנהגה"}
                        /> */}
                    </div>
                    <div>
                        <label>שבט</label>
                        <MultiSelect 
                        list={send}
                        chosen={chosenShevet}
                        ckey={'shevet'}
                        type="shevet"
                        add={onSelect}
                        remove={onRemove}
                        num={2}
                        emptyphrase={"בחירת שבט"}
                        fullphrase={"כל השבטים"}
                        choseAll={choseAll}
                        removeAll={removeAll}
                        />
                    </div>
                </React.Fragment>
            )
            break;
    }
}

const MultiSelect = ({list,ckey,chosen,add,remove,type,num,emptyphrase,choseAll,removeAll,fullphrase}) => {
    const [show,setShow] = useState(false)
    return (
        <div  tabIndex={num} style={{outline:"none",margin:"0"}} onBlur={()=>{
            setShow(false)
        }}> 
            <TagCon onClick={()=>{
                setShow(true)
            }}>
                {chosen.length == "0" ? 
                    <label>{emptyphrase}</label>
                    :
                    (
                        list.length == chosen.length ? 
                        <div>{fullphrase}</div>
                        :
                        (
                            chosen.map((ch,i)=>{
                                {/* console.log(ch) */}
                                return (
                                    <React.Fragment>
                                        <div>{ch[ckey]}</div>
                                        {chosen.length-1 != i && <div>,</div>}
                                    </React.Fragment>
                                )
                            })
                        )
                    )
                }

            </TagCon>
            {
                show &&
                <Ul>
                    <Li
                    ch={list.length == chosen.length}
                    onClick={()=>{
                        if(list.length == chosen.length){
                            removeAll(type)
                        }else{
                            choseAll(type,list)
                        }
                    }}
                    >
                    <span/>
                    בחר הכל</Li>
                    {list.map((item,ind)=>{
                        let s =[]
                        let a = _.find(chosen,function(o){return o[ckey] == item[ckey]})
                        console.log(a)
                        if(a){
                            return (
                                <Li 
                                onClick={()=>{
                                    remove(ind,item,type)
                                }}
                                ch={true}>
                                    <span/>
                                    {item[ckey]}
                                </Li>
                                )
                        }else{
                            return (<Li ch={false}
                                className="unchosen"
                                onClick={()=>{
                                    // to choose
                                    add(chosen,item,type)
                                }}
                                >
                                <span/>
                                {item[ckey]}</Li>
                                )
                        }
                        
                    })}
                </Ul>
            }
        </div>
    )
}



const DownloadReport = ({state}) => {
    const ageArrey =  [{id:"ג"},{id:"ד"},{id:"ה"},{id:"ו"},{id:"ז"},{id:"ח"},{id:"ט"},{id:"י"},{id:"יא"},{id:"יב"}]
    const [chosenDate,setChosend] = useState(moment().format("YYYY-MM-DD"))
    const [chosenAge,setChosen] = useState(ageArrey)
    const [chosenShevet,setShevet] = useState([])
    const [chosenHanaga,setHanaga] = useState([])
    // console.log(state.level)
    const [send,setSend] = useState([])
    const [down,setDonw] = useState(false)

    useEffect(()=>{
        switch(state.level){
            case "basic":
                setShevet([{shevet:state.unit}])
                setHanaga([{id:state.bigunit}])
                break;
            case "prem":
                setHanaga([{id:state.bigunit}]);
                let all = []
                tribes.map((z)=>{
                    if(z.hanaga == state.bigunit){
                        all.push(z)
                    }
                })
                setShevet(all)
                break;
            // case "master":
            //     // let b = []
            //     // let final = []
            //     // tribes.map((q)=>{
            //     //     if(!b.includes(q.hanaga)){
            //     //         b.push(q.hanaga)
            //     //         final.push({id:q.hanaga})
            //     //     }
            //     // })
                // setHanaga(final)

        }
    },[])
    const exportToXlsx = () => {
        
        let bigunitsto = []
        chosenHanaga.map((x)=>{
            console.log(x)
            bigunitsto.push(x.id)
        })
        let unitsto = []
        chosenShevet.map((c)=>{
            unitsto.push(c.shevet)
        })
        let dateto = moment(chosenDate,"YYYY-MM-DD").format("DD/MM/YYYY")
        let ageTo = []
        chosenAge.map((s)=>{
            ageTo.push(s.id)
        })
        let data = {
            date:dateto,
            bigUnits:bigunitsto,
            units:unitsto,
            age:ageTo
            
        }
        // console.log(data)
        setDonw(true)
        axios.post(BASE_URL+'/api/forms/'+state.level,{data})
        .then(res=>{
            // console.log(res)
            setDonw(false)
            let output = [
                {
                    childId:"ת.ז חניך",
                    childName:"שם מלא חניך",
                    date:"תאריך",
                    gil:"שכבת גיל",
                    guideName:"שם המדריך",
                    hanaga:"הנהגה",
                    shevet:"שבט",
                    parentId:"ת.ז הורה",
                    parentName:"שם מלא הורה"
                }
            ]
            res.data.map((row)=>{
                output.push({
                    childId:row.childId,
                    childName:row.childName,
                    date:row.date,
                    gil:row.gil,
                    guideName:row.guideName,
                    hanaga:row.hanaga,
                    shevet:row.shevet,
                    parentId:row.parentId,
                    parentName:row.parentName
                })
            })
            var wb = {
                Workbook:{
                     Views: [
                        {RTL:true}
                      ]
                },
                SheetNames:[],
                Sheets: {} 
            }
            var ws_name="Sheet1"
            var ws = XLSX.utils.json_to_sheet(output,{header:["childId","childName","date","gil","guideName","hanaga","shevet","parentId","parentName"],skipHeader:true})
            // var ws = XLSX.utils.aoa_to_sheet(ws_data);
            XLSX.utils.book_append_sheet(wb, ws, ws_name);
            XLSX.writeFile(wb, `דוח_${dateto}.xlsx`,  {bookType:"xlsx",  type:'buffer'})
        })
        


    }

    const removeAll = (type) => {
        switch(type){
            case "age":

                setChosen([])
                break;
            case "shevet":
                setShevet([])
                break;
            case "hanaga":
                setHanaga([])
                break;
        }
    }

    const choseAll = (type,list) => {
        switch(type){
            case "age":
                setChosen(list)
                break;
            case "shevet":
                setShevet(list)
                break;
            case "hanaga":
                setHanaga(list)
                break;
        } 
    }

    const ChooseHanaga = (val) => {
        // console.log(val)
        setHanaga([{id:val.id}])
        let arr = _.filter(tribes,function(o){return o.hanaga == val.id})
        setSend(arr)
        setShevet(arr)
    }

    const onSelect = (list,value,type) =>{
        // console.log(value)
        switch(type){
            case "age":
                let d = [...chosenAge]
                d.push(value)
                setChosen(d)
                break;
            case "shevet":
                let d1=[...chosenShevet]
                d1.push(value)
                setShevet(d1)
                break;
            case "hanaga":
                let d2=[...chosenHanaga]
                d2.push(value)
                setHanaga(d2)
                break;
        }

    }
    const onRemove = (index,value,type) =>{
        switch(type){
            case "age":
                let d = [...chosenAge]
                let c =[]
                d.map((x)=>{
                    if(x.id != value.id){
                        c.push(x)
                    }
                })
                setChosen(c)
                break;
            case 'shevet':
                let d1 = [...chosenShevet]
                let c1 =[]
                d1.map((xx)=>{
                    if(xx.shevet != value.shevet){
                        c1.push(xx)
                    }
                })
                setShevet(c1)
                break;
            case 'hanaga':
                let d2 = [...chosenHanaga]
                let c2 = []
                d2.map((xxx)=>{
                    if(xxx.id !=value.id){
                        c2.push(xxx)
                    }
                })
                setHanaga(d2)
                break;

        }
    }
    return (
        <Container>
            <h1>הפקת דוח הצהרות יומי</h1>
            <div>
                <label>תאריך</label>
                <input value={chosenDate} onChange={(e)=>setChosend(e.target.value)} type="date"/>
            </div>
            {state.level && Permission(state,tribes,chosenShevet,chosenHanaga,onSelect,onRemove,ChooseHanaga,send,choseAll,removeAll)}
            <div>
                <label>שכבה</label>
                <MultiSelect 
                list={ageArrey}
                chosen={chosenAge}
                ckey={'id'}
                type="age"
                add={onSelect}
                remove={onRemove}
                num={3}
                emptyphrase={"בחירת שכבת גיל"}
                fullphrase={"כל השכבות"}
                choseAll={choseAll}
                removeAll={removeAll}
                />
            </div>
            <div>
                <button onClick={()=>exportToXlsx()} style={{background:(down ? "#828282":"#2D9CDB")}}>הורדת הדוח באקסל</button>
                {down && <label id="lab">הורדת הדוח מתבצעת</label>}
            </div>

        </Container>
    )
}

export default DownloadReport;