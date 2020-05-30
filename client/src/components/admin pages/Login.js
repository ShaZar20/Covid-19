import React,{useState} from 'react';
import MicrosoftLogin from "react-microsoft-login";
import Loading from './Loading'
import axios from 'axios'
import {BASE_URL} from '../../constants'
import DownloadReport from './DownloadReport'

const Login = () => {
    const [loader,SetLoader] = useState(false)
    const [step,setStep] = useState(0)
    const [dat,setDat] = useState({})
    const [state,setState] = useState({})

    const authHandler = (err, data) => {
        if(err){

        }else{
            SetLoader(true)
            console.log(data)
            axios.get(BASE_URL+'/api/accounts/'+data.mail)
            .then(res=>{
                console.log(res)
                setDat(data)
                setState(res.data[0])
                setTimeout(()=>{
                    SetLoader(false)
                    setStep(1)
                },500)
            })
        }
      };
    return(
        <React.Fragment>
            {step == 0 &&
            <React.Fragment>
            {
                loader ? 
                    <Loading/>
                :
                <div className="container-center">
                    <div className="spacer-column" />
                    <div className="text-sub-title">התחברות לאזור האישי באמצעות מייל</div>

                    <MicrosoftLogin 
                        clientId={'c7d0f6ed-ef72-4c12-8878-33f0515d7957'} 
                        authCallback={authHandler} 
                        withUserData={true}
                    />

                    {/* <button className="button-Approved" style={{background: "#E0E0E0"}}>
                        Sign in with Microsoft
                    </button> */}
                </div>
            }
            </React.Fragment>
            }
            {
                step ==1&& state!={} && 
                <DownloadReport state={state}/>
            }
        </React.Fragment>
    )
};

export default Login;