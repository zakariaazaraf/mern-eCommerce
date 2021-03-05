const express = require('express')
const router = express.Router()
const Categorie = require('./../models/categorie')

router.get('/', async (req, res)=>{
    try{
        const categrories = await Categorie.find({})
        res.status(200).json({
            categories: categrories
        })
    }catch{
        res.status(500).json({
            message: 'Failed Getting Ctegories'
        })
    }
})

router.post('/', async (req, res)=>{
    const {name, description} = req.body
    const categorie = new Categorie({
        name: name,
        description: description,
        dateAdded: Date.now()
    })

    try{
        const categorieCreated = await categorie.save()       
        res.status(200).json({
            categorie: categorieCreated,
            message: 'Categorie Created Successfully'
        })
    }catch{
        res.status(500).json({
            message: 'Failed To Create Categorie'
        })
    }
})

module.exports = router