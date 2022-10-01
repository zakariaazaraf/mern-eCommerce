const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

router.post('/login', async (req, res)=>{
    const {email, password} = req.body

    try{

        const user = await User.findOne({ email })
    
        if(!user){
            return res.status(400).json({ message: 'Invaild Credential !' });
        }
    
        const isMatch = await bcrypt.compare(password, user.password)
    
        if(!isMatch){
            return res.status(400).json({ message: 'Invaild Credential !' });
        }
    
        const payload = {
            user: {
                _id: user.id
            }
        }
    
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1hr'});
    
        res.status(200).json({
            message: 'Loged In Successfully',
            token
        });

    }catch(e){

        console.log(`Error : ${e}`);
        res.status(500).json({
            message: `Server Error ${e}`
        });
    }

    
})

router.post('/register', async (req, res)=>{
    const {firstname, lastname, password, email} = req.body
    console.log(firstname, lastname, password, email)

    try{

        const hashedPassword = await bcrypt.hash(password, 12)
         
        let user = await User.findOne({ email });
        
        if (user) {
            res.status(400).json({
                message: 'Email Already Exists'
            })
            return
        }

        user = new User({
            firstName: firstname,
            lastName: lastname,
            email,
            password: hashedPassword,
            dateJoined: Date.now()
        })

        const newUser = await user.save()
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