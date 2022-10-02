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

router.get('/new', async (req, res)=>{
    res.render('categories/addCategorie')
})

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const categorie = await Categorie.findById(id)
        if(categorie){
            res.status(200).json({
                categorie: categorie
            })
            return
        }
        res.status(201).json({
            message: 'There id no Such Categorie Id'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Getting Categorie'
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

router.put('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const categorie = await Categorie.findById(id)
        if(categorie){
            const {name, description} = req.body
            categorie.name = name || categorie.name
            categorie.description = description || categorie.description
            try{
                const categorieUpdated = await categorie.save()
                res.status(200).json({
                    categorie: categorieUpdated
                })
            }catch{
                res.status(500).json({
                    message: 'Failed Updaiting Categorie'
                })
            }
            return
        }
        res.status(201).json({
            message: 'There Is No Such Categorie With This ID'
        })
    }catch{
        res.status(500).json({
            messag: 'Trouble Getting Categorie'
        })
    }
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const categorieDeleted = await Categorie.findById(id).remove()
        res.status(200).json({
            message: 'Categorie Deleted Successfully'
        })
    }catch{
        res.status(500).json({
            message: 'Failed Deleting Categorie'
        })
    }
})

module.exports = router