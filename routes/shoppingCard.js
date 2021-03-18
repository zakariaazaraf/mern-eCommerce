const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    //res.status(200).json()
    
    console.log(req.cookies)
    
    res.send(req.headers.cookie)
    
}) 

module.exports = router

const getOrders = ()=>{
    //return localStorage.getItem('orders') || []
}