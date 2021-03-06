const mongoose = require('mongoose')

const categorieSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    dateAdded: {type: Date, required: true, default: Date.now()}
})

module.exports = mongoose.model('Categorie', categorieSchema)