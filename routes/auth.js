const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

router.get('login', async (req, res)=>{
    const {email, passwaord} = req.body

    
})

router.get('register', async (req, res)=>{
    const {firstname, lastname, password, email} = req.body

    try{

        const hashedPassword = await bcrypt.hash(password, 12)
         
        const user = await User.findOne({ email });
        if(user){
            res.status(400).json({
                message: 'Email Already Exists'
            })
            return
        }

        user = new User({
            firstName: firstname,
            lastName: lastname,
            email,
            password: hashedPassword
        })

        const newUser = await newUser.save()
        const payload = {
            user: {
                _id: newUser.id
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1hr'});

        res.status(200).json({ message: 'User Created Successfuly', token});

    }catch(e){
        console.log(`Error ${e}`);
        res.status(500).json({message: 'Server Error'});
    }

    
})


module.exports = router;