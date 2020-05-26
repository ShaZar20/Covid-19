'use-strict'
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Tribes = require('../models/Tribes');

router.get('/',(req,res)=>{
    Tribes.find((err,doc)=>{
        if (err) {
            console.log(err)
            res.send(err)
        }
        else{
            console.log(doc)
            res.send(doc)
        }
    })
})

router.get('/:hanaga',(req,res)=>{
    //req.params.hanaga
    let query = {hanage:req.params.hanaga}
    Tribes.find(query,(err,doc)=>{
        if(err) {
            console.log(err)
            res.send(err)
        }else{
            console.log(doc)
            res.send(doc)
        }
    })
})


module.exports = router