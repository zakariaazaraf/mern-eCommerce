const express = require('express')
const user = require('../models/user')
const router = express.Router()
const Product = require('./../models/product')

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

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        if(product){
            res.status(200).json({
                product: product
            })
            return
        }
        res.status(201).json({
            message: 'There is No Such Product Id'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Getting Product'
        })
    }
})

router.post('/', async (req, res)=>{
    const {name, description, userId, categorieId, commentId} = req.body
    const product = new Product({
        name : name,
        description: description,
        userId: userId,
        categorieId: categorieId/* ,
        commentId: commentId */
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
    const {name, description, userId, categorieId} = req.body
    try{
        const product = await Product.findById(id)
        if(product){
            product.name = name || product.name
            product.description = description || product.description
            product.userId = userId || product.userId
            product.categorieId = categorieId || product.categorieId
            try{
                const productUpdate = await product.save()
                res.status(200).json({
                    product: productUpdate,
                    message: 'Product Updated Successfully'
                })
            }catch{
                res.status(500).json({
                    message: 'Failed Upading Product'
                })
            }
        }
        res.status(201).json({
            message: 'There is No Such Product With This ID'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Getting Product Data'
        })
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