import React ,{useState,useEffect} from 'react'
import ChildrenDetails from './ChildrenDetails'
import ParentDetails from './ParentDetails'
import Approved from './Approved'

const Switcher = (step,setStep,setChild,setParent,stateChild) => {
    switch(step){
        case 0:
            return <ChildrenDetails setChild={setChild} setStep={setStep}/>
        case 1:
            return <ParentDetails setParent={setParent} setStep={setStep}/>
        case 2:
            return <Approved name={stateChild.nameOfChild} setStep={setStep} setChild={setChild} setParent={setParent}/>
    }
}

const Steps = () => {
    const [step,setStep] = useState(0)
    const [stateChild,setChild] = useState({})
    const [stateParent,setParent] = useState({})

    useEffect(() => {
        console.log(stateChild)
        console.log(stateParent)
    }, [step])
    return (
        <React.Fragment>
            {Switcher(step,setStep,setChild,setParent,stateChild)}
        </React.Fragment>
    )
}

export default Steps