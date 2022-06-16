const express=require('express');
const User = require('../models/User');
const router =express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const JWT_SECRET='strrevArdneran'
//Create a User using :POST "/api/auth/createuser"
router.post("/createuser",[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','PAssword must be atleast 5 characters').isLength({min:5}),

], async(req,res)=>{
    //if there are errors bad req will be return and errors will also be returned
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether user with same email exists already
    try {
      
    
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a User with this email already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    secPass=await bcrypt.hash(req.body.password,salt);

    //create a new User
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET);

      res.json(authtoken);
      //Catch errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }

})

module.exports=router