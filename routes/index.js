const express = require('express')
const router = express.Router()
const Product = require('./../models/product')

router.get('/', async (req, res)=>{
    try{
        const products = await Product.find({}).sort({dateAdded: 'desc'}).limit(5)
        res.render('index', {products: products})
    }catch{
        res.render('index')
    }
})

module.exports = router