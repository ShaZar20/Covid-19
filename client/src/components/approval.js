import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants'
import moment from 'moment'

const Approval = (props) => {

    const [name,setName] = useState('')
    const [date,setDate] = useState('')
    const [loader,setLoader] = useState(true)
    useEffect(() => {
        axios.get(BASE_URL+'/api/forms/'+props.match.params.id)
        .then(res=>{
            console.log(res)
            setName(res.data[0].childName)
            setDate(res.data[0].date)
            setLoader(false)
        })
    }, [])

    return (
        <React.Fragment>
        {loader ? 
            <div className="container-center" >
                <div className="text-title" >
                    נטען...
                </div>
            </div>
        :
        (
            name == '' ?
            <div className="container-center" >
                <div className="text-title" >
                    נראה שקרתה שגיאה , יש לבדוק את הלינק שוב
                </div>
            </div>
            :
            <div className="container-center" >
                <div className="text-title"> אישור השתתפות בפעילות - {name} - {date}</div>
                <div className="text-title" style={{fontSize:"18px"}}>ההצהרה נקלטה בהצלחה וניתן להשתתף בפעילות!</div>
                {/* <div className="text-title" style={{fontSize:"18px"}}>{date}</div> */}
            </div>
        )
        }
        </React.Fragment>
    )
}

export default Approval;