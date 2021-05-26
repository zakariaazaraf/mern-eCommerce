const express = require('express')
const User = require('../models/user')
const router = express.Router()
const Product = require('./../models/product')
const Categorie = require('./../models/categorie')
const product = require('./../models/product')

router.get('/', async (req, res)=>{
    try{
        const products = await Product.find({})/* .populate('categorieId').limit(10).sort('asc') */
        res.status(200).json({
            products: products
        })
        
    }catch{
        res.status(500).json({
            message: 'Failed Getting Products'
        })
    }
})

router.get('/new', async (req, res)=>{
    try{
        const users = await User.find({})
        const categories = await Categorie.find({})
        res.render('products/addProduct', {
            users: users,
            categories: categories
        })
    }catch{
        res.status(500).json({
            message: 'Fetch users and categories Falied'
        })
    }
})

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        let orders = req.cookies.orders != null ? req.cookies.orders : {}
        let exists = false;

        JSON.parse(orders).forEach(element => {
            if(element.id === product.id){
                exists = true;
            }
        });

        if(product){
            /* res.status(200).json({
                product: product
            }) */
            res.render('products/product', {product: product, exists: exists})
            return
        }
        res.status(201).json({
            message: 'There is No Such Product Id'
        })
    }catch(e){
        res.status(500).json({
            message: 'Failed Getting Product'
        })

        //console.log(e)
    }
})

router.get('/:id/edit', async (req, res)=>{
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        const users = await User.find({})
        const categories = await Categorie.find({})
        res.render('products/editProduct', {
            product: product,
            users: users,
            categories: categories
        })
    }catch{
        res.status(500).json({
            message: 'Fetch users and categories Falied'
        })
    }
})

router.post('/', async (req, res)=>{
    const {name, description, price, coverImage, userId, categorieId, commentId} = req.body
    
    const product = new Product({
        name : name,
        description: description,
        price: price,
        coverImage: coverImage,
        userId: userId,
        categorieId: categorieId
        //commentId: commentId 
    })
    try{
        const productCreated = await product.save()
        res.status(200).json({
            product: productCreated,
            message: 'Product Created Successfully !!'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Creating Product'
        })     
    }
})

router.put('/:id', async (req, res)=>{
    const {id} = req.params
    const {name, description, price, coverImage, userId, categorieId} = req.body
    try{
        const product = await Product.findById(id)
        if(product){
            product.name = name || product.name
            product.description = description || product.description
            product.price = price || product.price
            product.coverImage = coverImage || product.coverImage
            product.userId = userId || product.userId
            product.categorieId = categorieId || product.categorieId
            try{
                const productUpdate = await product.save()
                res.status(200).json({
                    product: productUpdate,
                    message: 'Product Updated Successfully'
                })
                
            }catch (err){
                res.status(500).json({
                    message: 'Failed Upading Product'
                })
                console.log(err)
            }
            return
        }
        res.status(201).json({
            message: 'There is No Such Product With This ID'
        })
    }catch (err){
        res.status(500).json({
            message: 'Failed Getting Product Data'
        })
        console.log(err)
    }
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const product = await Product.findById(id).remove()
        res.status(200).json({
            message: 'Product Removed Successfully'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Removing Product'
        })
    }
})

module.exports = router