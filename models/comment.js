const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    commentDate: {type: Date, required: true, default: Date.now()},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    productId: {type: Schema.Types.ObjectId, ref: 'Product'}
})

module.exports = mongoose.model('Comment', commentSchema)