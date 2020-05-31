'use-strict'
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Accounts = require('../models/Tribes');

router.get('/',(req,res)=>{
    try{

        Accounts.find((err,doc)=>{
            if (err) {
                console.log(err)
                res.send(err)
            }
            else{
                console.log(doc)
                res.send(doc)
            }
        })
    }
    catch(err){
        
    }
})


router.get('/:email',(req,res)=>{
    //req.params.hanaga
    console.log(req.params)
    try{
        let query = {email:req.params.email}
        Accounts.find(query,(err,doc)=>{
            if(err) {
                console.log(err)
                res.send(err)
            }else{
                console.log(doc)
                res.send(doc)
            }
        })
    }
    catch(err){
        
    }
})

module.exports = router