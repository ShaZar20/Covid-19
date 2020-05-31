'use-strict'
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Forms = require('../models/Forms');

router.get('/:time',(req,res)=>{
    //req.params.time
    let query = {_id:req.params.time}
    Forms.find(query,(err,doc)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(doc)
            res.send(doc)
        }
    })
})

router.post('/',(req,res)=>{
    let newForm = new Forms(req.body.data)
    newForm._id = mongoose.Types.ObjectId()
    newForm.save(function(err,doc){
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(doc)
            res.send(doc)
        }
    })
})


module.exports = router