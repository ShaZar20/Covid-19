import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

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
        }
        select{
            margin:0;
            padding:1rem;
            background:white;
            outline:none;
            color:#828282;
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
    
`

const gil =  ["ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב"]

const View = () => {
    const [step,setStep] = useState(0)
    const [selected,setSelected] = useState(0)
    return (
        <Container>
            <h1>דוח LIVE</h1>
            <div>
                <label>הנהגה</label>
                <div></div>
            </div>
            <div>
                <label>שבט</label>
                <div></div>
            </div>
            <div>
                <label>שכבה</label>
                <select
                value={selected}
                onChange={(e)=>setSelected(e.target.value)}
                >
                    {gil.map((x)=>{
                        return (
                            <option value={x}>
                                {x}
                            </option>
                        )
                    })}

                </select>
            </div>
            <button>צפייה</button>
        </Container>
    )
}

export default View;