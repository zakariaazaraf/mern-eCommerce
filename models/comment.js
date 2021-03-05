const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    commentDate: {type: Date, required: true, default: Date.now()},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    productId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'}
})

module.exports = mongoose.model('Comment', commentSchema)