import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {tribes} from './resources'
import axios from 'axios'
import {BASE_URL} from '../constants'
import moment from 'moment'
import _ from 'lodash'

const Container = styled.div`
    width:350px;
    margin:0 auto;
    margin-top:2rem;
    display:flex;
    flex-direction:column;
    h1{
        text-align:center;
    }
    div{
        display:flex;
        flex-direction:column;
        margin-top:2rem;
        label{
            font-size:18px;
        }
        div{
            margin:0;
            padding:1rem;
            background:#E0E0E0;
            color:#828282;
            border:1px solid black;
            border-radius:6px;
            font-size:16px;
        }
        select{
            margin:0;
            padding:1rem;
            background:white;
            outline:none;
            color:#828282;
            font-size:16px;
            border:1px solid black;
            border-radius:6px;
        }
    }
    button{
        background:#2D9CDB;
        padding:1rem;
        border:none;
        color:white;
        font-size:14px;
        font-weight:bold;
        border-radius:6px;
        margin-top:2rem;
    }
    button:disabled{
        background:#828282;
        padding:1rem;
        border:none;
        color:white;
        font-size:14px;
        font-weight:bold;
        border-radius:6px;
        margin-top:2rem;
    }
    
`

const Top = styled.div`
    display:flex !important;
    justify-content:flex-start !important;
    flex-direction:row !important;
    margin:0 !important;
    margin-top:0 !important;
    margin-bottom:2rem !important;
    button{
        border:none;
        background:transparent;
        color:unset;
        padding:1rem 0 ;
        margin:0;
    }
`

const Main = styled.div`
    padding:3px !important;  
    border:1px solid black !important;
    /* min-height:15rem; */
    border-radius:10px !important;
    div{
        padding:10px 5px !important;
        border:none !important;
        background:transparent !important;
    }
`

const gil =  ["ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב"]

const View = (props) => {
    const [step,setStep] = useState(0)
    const [selected,setSelected] = useState(0)
    const [shevet,setShevet] = useState('')
    const [data,setData] = useState([])
    const [fullData,setFull] = useState([])
    const [hanaga,setHanaga] = useState('')
    const [err,setErr] = useState(false)
    const [search,setSearch] = useState('')
    const [counter,setCounter] = useState(0)
    useEffect(()=>{
        let counter = true
        tribes.map((x)=>{
            if(x.code == props.match.params.code){
                setShevet(x.shevet)
                setHanaga(x.hanaga)
                counter = false
            }
        })
        if(counter){
            setErr(true)
        }
    },[])

    useEffect(()=>{
        let arr = []
        fullData.map((x)=>{
            if(x.childName.includes(search)){
                arr.push(x)
            }
        })
        setData(arr)
    },[search])

    return (
        <Container>
            {
                step == 0 ?

            
            <React.Fragment>
            {
                err ? 
                <h1>התרחשה שגיאה , יש לבדוק את הקישור</h1>
                :
                <React.Fragment>
                    <h1>דוח LIVE</h1>
                    <div>
                        <label>הנהגה</label>
                        <div>{hanaga}</div>
                    </div>
                    <div>
                        <label>שבט</label>
                        <div>{shevet}</div>
                    </div>
                    <div>
                        <label>שכבה</label>
                        <select
                        value={selected}
                        onChange={(e)=>setSelected(e.target.value)}
                        >
                            <option value={0} >יש לבחור שכבה</option>
                            {gil.map((x)=>{
                                return (
                                    <option value={x}>
                                        {x}
                                    </option>
                                )
                            })}

                        </select>
                    </div>
                    <button
                    disabled={selected==0}
                    onClick={()=>{
                        let data = {
                            date:moment().format("DD/MM/YYYY"),
                            bigUnits:[hanaga],
                            units:[shevet],
                            age:[selected]   
                        }
                        axios.post(BASE_URL+'/api/forms/basic',{data})
                        .then(res=>{
                            console.log(res)
                            let array = _.sortBy(res.data, [function(o) { return o.childName; }]);
                            setData(array)
                            setFull(array)
                            setStep(1)
                        })
                    }}
                    >צפייה</button>
                </React.Fragment>
            }
            </React.Fragment>
            :
            <React.Fragment>
                <Top> 
                    <button onClick={()=>setStep(0)}>חזור אחורה</button>
                </Top>
                <input value={search} onChange={(e)=>{
                    setCounter(0)
                    setSearch(e.target.value)}} type="text" placeholder="חיפוש על פי שם"/>
                <Main>
                    {
                        data.map((row)=>{
                            
                                return(
                                    <div>{row.childName}</div>
                                )
                            
                        })
                    }
                    {data.length == 0 && <div>אין תוצאות</div>}
                </Main>
            </React.Fragment>
        }
        </Container>
    )
}

export default View;