const express = require('express')
const router = express.Router()

const Product = require('./../models/product')
const Categorie = require('./../models/categorie')

router.get('/', async (req, res)=>{
    let products = []
    try{
         products = await Product.find({})
         const categories = await Categorie.find({})
         //products = await Product.findOne({_id: '6042436cb201a82594551022'}).populate('categorieId').exec()
         
        if(products.length > 0){
            res.render('shop', {products, categories})
            return;
        }
        res.render('shop', {products, categories})
    }catch{
        res.status(500).json({
            message: 'Failed Getting Products'
        })
    }
})

module.exports = router