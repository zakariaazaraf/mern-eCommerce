const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    userId: {type: Schema.Types.ObjectId, ref : 'User'},
    categorieId: {type: Schema.Types.ObjectId, ref: 'Categorie'}
})

module.exports = mongoose.model('Product', productSchema)