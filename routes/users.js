const express = require('express')
const router = express.Router()

const User = require('./../models/user')

router.get('/', async (req, res)=>{
    
    try{
        const users = await User.find({})
        res.status(200).json({
            users: users
        })
    }catch{
        res.status(500).json({
            message: 'Failed To Get Users'
        })
    }
})

router.get('/new', (req, res)=>{
    res.render('user/addUser')
}) 

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    
    try{
        const user = await User.findById(id)
        if(user){ // mean !== null
            res.status(200).json({
                user: user
            })
            return
        }
        res.status(201).json({
            message: `There\'s No Such User With This ${id} ID`
        })
    }catch (error){
        res.status(500).json({
            errorMessage: 'Getting User Failed'
        })
    }
})

router.get('/:id/edit', (req, res) =>{
    res.send('User edit Router')
})

router.post('/', async (req, res)=>{
    const {firstname, lastname, email, password} = req.body
    
    const user = new User({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        dateJoined: Date.now()
    })
    try {  
        const newUser = await user.save()
        res.status(200).json({
            user: newUser,
            message: 'User Created Successfuly'
        })
    } catch (error) {
        res.status(500).json({
            message: 'User Creation Failed'
        })
    }
})

router.put('/:id', async (req, res) =>{
    const {id} = req.params
    const {firstname, lastname, email, password} = req.body
    try{
        const user = await User.findById(id)
        if(user){
            user.firstName = firstname || user.firstName
            user.lastName = lastname || user.lastName
            user.email = email || user.email
            user.password = password || user.password
            try{
                await user.save()
                res.status(200).json({
                    message: 'User Updated Successufully'
                })
            }catch{
                res.status(500).json({
                    message: 'Failed Updating User'
                })
            }
            return
        }
        res.status(201).json({
            message: `There Is No Such User's ${id} Id`
        })
    }catch{
        res.status(500).json({
            message: 'Field Getting User'
        })
    }
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const user = await User.findById(id)
        if(user){
            try{
                await user.remove()
                res.status(201).json({
                    message: 'User Deleted Successfully'
                })
            }catch{
                res.status(500).json({
                    message: 'Failed To Delete User'
                })
            }
            return
        }
        res.status(201).json({
            message: `There's No User With This ${id} ID`
        })
    }catch{
        res.status(500).json({
            message: 'Failed Getting User'
        })
    }
})


module.exports = router