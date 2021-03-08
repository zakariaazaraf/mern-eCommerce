const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    coverImage: {type: String, required: true},
    dateAdded: {type: Date, default: Date.now()},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref : 'User'},
    categorieId: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Categorie'}],
    commentId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Product', productSchema)