const express = require('express')
const router = express.Router()
const Product = require('./../models/product')

const isAuth = require('./../middleware/is-auth')

router.get('/'/* , isAuth */, async (req, res)=>{
    
    // let orders = req.cookies.orders != null ? req.cookies.orders : {}
    let orders = req.cookies.orders != null ? JSON.parse(req.cookies.orders) : {}

    try{
        const products = await Product.find({})
        // res.render('orders/order', {orders: JSON.parse(orders), products: products})

        res.status(200).json({ orders, products})

    }catch{
        res.status(500).json({msg: 'Failed Getting Product'})
    }

    
}) 

module.exports = router

const getOrders = ()=>{
    //return localStorage.getItem('orders') || []
}