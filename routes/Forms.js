'use-strict'
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Forms = require('../models/Forms');

router.post('/master',(req,res)=>{
    //req.params.time
    console.log(req.body)
    try{
        let query = {date:req.body.data.date,hanaga:{$in:req.body.data.bigUnits},gil:{$in:req.body.data.age}}
        Forms.aggregate([
            {
                $match:query
            },
            {
                $group:{
                    _id:'$childId',
                    "childName":{
                        $first:"$childName"
                    },
                    "childId":{
                        $first:"$childId"
                    },
                    "hanaga":{
                        $first:"$hanaga"
                    },
                    "shevet":{
                        $first:"$shevet"
                    },
                    "gil":{
                        $first:"$gil"
                    },
                    "guideName":{
                        $first:"$guideName"
                    },
                    "parentName":{
                        $first:"$parentName"
                    },
                    "parentId":{
                        $first:"$parentId"
                    },
                    "validator":{
                        $first:"$validator"
                    },
                    "date":{
                        $first:"$date"
                    }
                }
            }
        ],(err,doc)=>{
            if(err){
                console.log(err)
                res.send(err)
            }else{
                console.log(doc)
                res.send(doc)
            }
        })
    }
    catch(err){
        console.log(err)
    }
})

router.post('/basic',(req,res)=>{
    //req.params.time
    console.log(req.body)
    try{
        let query = {
            date:req.body.data.date,
            shevet:{$in:req.body.data.units},
            hanaga:{$in:req.body.data.bigUnits},
            gil:{$in:req.body.data.age}
        }
        Forms.aggregate([
            {
                $match:query
            },
            {
                $group:{
                    _id:'$childId',
                    "childName":{
                        $first:"$childName"
                    },
                    "childId":{
                        $first:"$childId"
                    },
                    "hanaga":{
                        $first:"$hanaga"
                    },
                    "shevet":{
                        $first:"$shevet"
                    },
                    "gil":{
                        $first:"$gil"
                    },
                    "guideName":{
                        $first:"$guideName"
                    },
                    "parentName":{
                        $first:"$parentName"
                    },
                    "parentId":{
                        $first:"$parentId"
                    },
                    "validator":{
                        $first:"$validator"
                    },
                    "date":{
                        $first:"$date"
                    }
                }
            }
        ],(err,doc)=>{
            if(err){
                console.log(err)
                res.send(err)
            }else{
                console.log(doc)
                res.send(doc)
            }
        })
        // Forms.find(query,(err,doc)=>{
        //     if(err){
        //         console.log(err)
        //         res.send(err)
        //     }else{
        //         // console.log(doc)
        //         res.send(doc)
        //     }
        // })
    }
    catch(err){

    }
})

router.post('/prem',(req,res)=>{
    //req.params.time
    console.log(req.body)
    try{
        let query = {
            date:req.body.data.date,
            shevet:{$in:req.body.data.units},
            hanaga:{$in:req.body.data.bigUnits},
            gil:{$in:req.body.data.age}
        }
        Forms.aggregate([
            {
                $match:query
            },
            {
                $group:{
                    _id:'$childId',
                    "childName":{
                        $first:"$childName"
                    },
                    "childId":{
                        $first:"$childId"
                    },
                    "hanaga":{
                        $first:"$hanaga"
                    },
                    "shevet":{
                        $first:"$shevet"
                    },
                    "gil":{
                        $first:"$gil"
                    },
                    "guideName":{
                        $first:"$guideName"
                    },
                    "parentName":{
                        $first:"$parentName"
                    },
                    "parentId":{
                        $first:"$parentId"
                    },
                    "validator":{
                        $first:"$validator"
                    },
                    "date":{
                        $first:"$date"
                    }
                }
            }
        ],(err,doc)=>{
            if(err){
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
router.post('/',(req,res)=>{
    console.log(req.body)
    try{
        let newForm = new Forms(req.body.data)
        newForm.save(function(err,doc){
            if(err){
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

router.get('/:id',(req,res)=>{
    // let query = {email:req.params.email}
    try{
        
        Forms.find({_id:req.params.id},function(err,doc){
            if(err){
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