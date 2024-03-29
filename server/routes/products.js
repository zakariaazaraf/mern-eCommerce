const express = require('express')
const User = require('../models/user')
const router = express.Router()
const Product = require('./../models/product')
const Categorie = require('./../models/categorie')


const multer = require('multer')
// const upload = multer( {dest:'./upload/'} )

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage});

const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

const saveCover = (book, image) =>{
    if (image == null) return
    if (image != null && imageMimeTypes.includes(image.mimetype)) {
      book.coverImage = new Buffer.from(image.buffer, 'base64')
      book.coverImageType = image.mimetype
    }
  }

router.get('/', async (req, res)=>{
    try{

        /** TODO: Refactor this block, Should use try catch and return the appropriate status and message. */
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

        if(Object.keys(orders).length > 0){
            
            JSON.parse(orders).forEach(element => {
                if(element.id === product.id){
                    exists = true;
                }
            });
        }

        if (product) {
             res.status(200).json({
                product: product,
                exists: exists
            }) 
            // res.render('products/product', {product: product, exists: exists})
            return
        }

        res.status(201).json({
            message: 'There is No Such Product Id'
        })
    } catch(error) {
        res.status(500).json({
            message: error
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

router.post('/', upload.single('image'), async (req, res)=>{
    // const {name, description, price, coverImage, userId, categorieId, commentId} = req.body
    const {name, description, price, image} = req.body

    const product = new Product({
        name: name,
        description: description,
        price: price,
        // userId: 1,
        // categorieId: 1
        //commentId: commentId 
    })

    try {
        saveCover(product, req.file)
        const productCreated = await product.save()
        res.status(200).json({
            product: productCreated,
            message: 'Product Created Successfully !!'
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })     
    }
})

router.put('/:id', upload.single('image'), async (req, res)=>{
    const {id} = req.params
    const {name, description, price, image} = req.body

    const product = await Product.findById(id)
    console.log(name, description, price, image)
    console.log(product)


    res.status(200).json({
        product: productUpdate,
        message: 'Product Updated Successfully'
    })
    return

    try{
        const product = await Product.findById(id)
        if(product){
            product.name = name || product.name
            product.description = description || product.description
            product.price = price || product.price
            // product.coverImage = coverImage || product.coverImage
            // product.userId = userId || product.userId
            // product.categorieId = categorieId || product.categorieId
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
        console.log(product)
        res.status(200).json({
            error: false,
            message: `The product with the ID: ${id} has been deleted successfuly`
        })
    }catch{
        res.status(500).json({
            error: true,
            message: 'Failed Removing Product'
        })
    }
})

module.exports = router