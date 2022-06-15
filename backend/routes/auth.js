const express=require('express');
const User = require('../models/User');
const router =express.Router();

//Creaye a User using :POST

router.get("/",(req,res)=>{
    console.log(req.body);

    const user =User(req.body);
    user.save();


    res.send("Hello");
})

module.exports=router