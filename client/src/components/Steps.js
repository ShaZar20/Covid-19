import React ,{useState,useEffect} from 'react'
import ChildrenDetails from './ChildrenDetails'
import ParentDetails from './ParentDetails'


const Switcher = (step,setStep) => {
    switch(step){
        case 0:
            return <ChildrenDetails setStep={setStep}/>
        case 1:
            return <ParentDetails setStep={setStep}/>
    }
}

const Steps = () => {
    const [step,setStep] = useState(1)
    return (
        <React.Fragment>
            {Switcher(step,setStep)}
        </React.Fragment>
    )
}

export default Steps