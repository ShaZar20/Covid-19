import React ,{useState,useEffect} from 'react'
import ChildrenDetails from './ChildrenDetails'
import ParentDetails from './ParentDetails'
import Approved from './Approved'
import axios from 'axios'
import {BASE_URL} from '../constants'
import moment from 'moment'
import _ from 'lodash'


const Switcher = (step,setStep,setChild,setParent,url,stateChild,Submitting) => {
    switch(step){
        case 0:
            return <ChildrenDetails setChild={setChild} setStep={setStep}/>
        case 1:
            return <ParentDetails setParent={setParent} submit={Submitting} setStep={setStep}/>
        case 2:
            return <Approved name={stateChild.nameOfChild} url={url} setStep={setStep} setChild={setChild} setParent={setParent}/>
    }
}

const Steps = () => {
    const [step,setStep] = useState(0)
    const [stateChild,setChild] = useState({})
    const [stateParent,setParent] = useState({})
    const [url,setUrl] = useState('')

    useEffect(() => {
        console.log(stateChild)
        console.log(stateParent)
    }, [step])

    const Submitting = (parent) => {
        let data = {
            parentName: parent.nameOfParent ,
            parentId: parent.IDNumber,
            childName: stateChild.nameOfChild,
            childId: stateChild.IDNumber,
            hanaga: stateChild.hanaga,
            shevet: stateChild.shevet,
            gil: stateChild.age,
            guideName: stateChild.madrich,
            check1:true,
            check2:true,
            check3:true,
            validator:true,
            date:moment().format("DD/MM/YYYY")
        }
        axios.post(BASE_URL+'/api/forms',{data}).then((res)=>{
            if(!_.isEmpty(res.data)){
                setUrl(res.data._id)
                setStep(2)
            }
        })

    }
    return (
        <React.Fragment>
            {Switcher(step,setStep,setChild,setParent,url,stateChild,Submitting)}
        </React.Fragment>
    )
}

export default Steps