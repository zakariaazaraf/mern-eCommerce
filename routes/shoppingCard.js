const express = require('express')
const router = express.Router()
const Product = require('./../models/product')

router.get('/', async (req, res)=>{
    //res.status(200).json()
    try{
        const products = await Product.find({})
        res.render('orders/order', {orders: JSON.parse(req.cookies.orders), products: products})

    }catch{
        res.status(500).json({msg: 'Failed Getting Product'})
    }
    
    
}) 

module.exports = router

const getOrders = ()=>{
    //return localStorage.getItem('orders') || []
}